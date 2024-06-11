import React, { useState } from "react";
import { Dialog } from "@mui/material";
import img from "../login/images/left2.png";
import axios from "axios";
import "./loginDialog.css";
import { useNavigate } from "react-router-dom";
// import authenticateSignup from '../../service/api'
// import { authenticateLogin } from "../../service/api";

export default function LoginDialog(props) {
	const signupInitialValues = {
		email: "",
		name: "",
		phone: "",
		password: "",
	};
	const [page, setPage] = useState("login");
	const [signup, setSignup] = useState(signupInitialValues);
	const [email, setEmail] = useState({ email: "", password: "" });
    const [visible,setVisible]=useState('');
	const navigate=useNavigate();
	// const [acc,setAcc]=useState(loginInitialValues)
	// const [ login, setLogin ] = useState(loginInitialValues);
	const [error, setError] = useState(false);

	const handleClose = () => {
		props.helper({ open: false });
		setPage("login");
		setError(false);
	};

	const handlePage = () => {
		setPage("signup");
	};

	const onInputChange = (e) => {
		setSignup({ ...signup, [e.target.name]: e.target.value });
	};
	const onValueChange = (e) => {
		setEmail({ ...email, [e.target.name]: e.target.value });
	};

	const signupUser = async (e) => {
		e.preventDefault();

		try {
			setPage("login");
			await axios.post("http://localhost:8000/signup", signup);
		} catch (err) {
			console.log(err);
		}
	};

	const LoginUser = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:8000/login', { email: email.email, password: email.password });
			console.log(response.data)
			if (response.data.message) {
				if(response.data.message==="not exist"){
					setVisible('User Does Not Exist.');
				}
				else if(response.data.message==="password wrong"){
					setVisible('Invalid Password.');
				}
				if (response.data.token) {
					props.helper({ email: email.email, password: email.password, open: false });
					localStorage.setItem('token', response.data.token);
					localStorage.setItem('userId', response.data.userId);
					localStorage.setItem('name', email.email);
					navigate('/');
				}
			}
		} catch (err) {
			console.log(err);
			setError(err);
		}
	};

	return (
		<div>
			<Dialog open={props.data.open} onClose={handleClose} PaperProps={{ sx: { maxWidth: "unset", maxHeight: "unset" } }}>
				{page === "login" ? (
					<div className="flex-container">
						<div className="leftBox">
							<img src={img} alt="" className="leftImg" />
						</div>
						<div className="rightBox">
							<h2 style={{ textAlign: "center", color: "white", marginTop: "50px" }}>Welcome Back!</h2>
							<h6 style={{ textAlign: "center" }}>
								Don't have an account yet?{" "}
								<u onClick={handlePage} style={{ cursor: "pointer" }}>
									Sign Up
								</u>
							</h6>
							<form id="form1" style={{ margin: "40px 25px 10px 25px" }}>
								<div className="form-group" style={{ marginBottom: "8px" }}>
									<label htmlFor="exampleInputEmail1" style={{ marginBottom: "5px" }}>
										Enter your Email address or Phone
									</label>
									<input
										type="email"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Email/Phone"
										name="email"
										onChange={(e) => {
											onValueChange(e);
										}}
									/>
									<small>{visible}</small>
								</div>
								{error && (
									<small>
										<u style={{textDecoration:"none",color:"red"}}>Enter Valid Email or Password</u>
									</small>
								)}
								<div className="form-group">
									<label htmlFor="exampleInputPassword1" style={{ marginBottom: "5px" }}>
										Password
									</label>
									<input
										type="password"
										className="form-control"
										id="exampleInputPassword1"
										placeholder="Password"
										name="password"
										onChange={(e) => {
											onValueChange(e);
										}}
									/>
									<small>
										<u>Forgot Password?</u>
									</small>
								</div>

								<button type="submit" style={{ marginTop: "20px", width: "100%", backgroundColor: "#015e65", border: "none" }} className="btn btn-primary" onClick={LoginUser}>
									Login
								</button>
							</form>
						</div>{" "}
					</div>
				) : (
					<div className="flex-container">
						<div className="leftBox">
							<img src={img} alt="" className="leftImg" />
						</div>
						<div className="rightBox">
							<h2 style={{ textAlign: "center", color: "white", marginTop: "40px" }}>Welcome Here!</h2>
							<h6 style={{ textAlign: "center" }}>
								{" "}
								Already have an account?{" "}
								<u
									style={{ cursor: "pointer" }}
									onClick={() => {
										setPage("login");
									}}
								>
									Login Here
								</u>
							</h6>
							<form id="form2" style={{ margin: "40px 25px 10px 25px" }} onSubmit={signupUser}>
								<div className="form-group" style={{ marginBottom: "8px" }}>
									<label htmlFor="exampleInputEmail1" style={{ marginBottom: "5px" }}>
										Enter your Email address
									</label>
									<input
										type="email"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Email Adress"
										required="true"
										name="email"
										onChange={(e) => {
											onInputChange(e);
										}}
									/>
								</div>
								<div className="form-group" style={{ marginBottom: "8px" }}>
									<label htmlFor="name" style={{ marginBottom: "5px" }}>
										Enter your Name
									</label>
									<input
										type="text"
										className="form-control"
										id="name"
										required="true"
										aria-describedby="emailHelp"
										placeholder="Name"
										name="name"
										onChange={(e) => {
											onInputChange(e);
										}}
									/>
								</div>
								<div className="form-group" style={{ marginBottom: "8px" }}>
									<label htmlFor="phone" style={{ marginBottom: "5px" }}>
										Enter your Phone Number
									</label>
									<input
										type="text"
										className="form-control"
										id="phone"
										required="true"
										// pattern="[1-9]{10}"
										aria-describedby="emailHelp"
										placeholder="Phone"
										name="phone"
										onChange={(e) => {
											onInputChange(e);
										}}
									/>
								</div>
								{/* <div className="form-group" style={{marginBottom:"8px"}} >
        <label for="name" style={{marginBottom:"5px"}}>Enter your Name</label>
        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Name"/>
      </div> */}
								<div className="form-group">
									<label htmlFor="exampleInputPassword1" style={{ marginBottom: "5px" }}>
										Password
									</label>
									<input
										type="password"
										className="form-control"
										id="exampleInputPassword1"
										placeholder="Password"
										required="true"
										minLength="6"
										name="password"
										onChange={(e) => {
											onInputChange(e);
										}}
									/>
								</div>

								<button type="submit" style={{ marginBottom: "20px", marginTop: "20px", width: "100%", backgroundColor: "#015e65", border: "none" }} className="btn btn-primary" >
									Sign Up
								</button>
							</form>
						</div>
					</div>
				)}
			</Dialog>
		</div>
	);
}