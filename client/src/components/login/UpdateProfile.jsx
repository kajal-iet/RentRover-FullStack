import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import "./updateProfile.css"
const UpdateProfile = () => {
  const [password, setPassword] = useState("");
  const [currpassword, setcurrPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
   const navigate=useNavigate();
  const handleUpdate = async () => {
    try {
        const userId=localStorage.getItem('userId');
        if(password!==currpassword){
            alert("Passwords Don't Match")
        }
        else{
      // Make an API request to update the profile
      const response = await axios.post("http://localhost:8000/update-profile", {
        password,
        mobileNumber,
        email,
        name,
        userId
      });
     
      // Handle the response as needed
      console.log(response.data);
    }} catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
    <div className="abcde" id="abcde">
                <div className="FreshMango"><Link to="/"><span className="cherry" aria-label="Back"><i className="bi bi-arrow-left" style={{fontSize: "30px"}}></i></span></Link></div>
            </div>
    <div className="container" style={{marginTop:"40px",width:"50%",border:"1px solid #ccc",padding:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <form action="" style={{width:"60%"}}>
      <h2 style={{marginBottom:"15px"}}>Update Profile</h2>
      <label className="form-label" style={{float:"left",fontWeight:"600",marginTop:"15px"}}>Email:</label>
      <input
      className="form-control"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="form-label" style={{float:"left",fontWeight:"600",marginTop:"15px"}}>Mobile Number:</label>
      <input
      className="form-control"
        type="text"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <label className="form-label" style={{float:"left",fontWeight:"600",marginTop:"15px"}}>Username:</label>
      <input
      className="form-control"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className="form-label" style={{float:"left",fontWeight:"600",marginTop:"15px"}}> Current Password:</label>
      <input
      className="form-control"
        type="password"
        value={currpassword}
        onChange={(e) => setcurrPassword(e.target.value)}
      />
      <label className="form-label" style={{float:"left",fontWeight:"600",marginTop:"15px"}}>New Password:</label>
      <input
      className="form-control"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      
      <button className="btn btn-primary" onClick={()=>{handleUpdate(); navigate('/')}} style={{marginTop:"20px"}}>Update Profile</button>
      </form>
    </div></>
  );
};

export default UpdateProfile;
