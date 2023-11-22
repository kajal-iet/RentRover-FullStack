import { useEffect, useState } from "react";
// import Header from "./Header";
import { useNavigate, Link,useLocation } from "react-router-dom";
import axios from "axios";
import LoginDialog from "../login/LoginDialog";
import './addProduct.css'
// import categories from "./CategoriesList";
// import API_URL from "../constants";

function AddProduct() {

    const navigate = useNavigate();
    const [pname, setpname] = useState('');
    const [pdesc, setpdesc] = useState('');
    const [price, setprice] = useState('');
    // const [category, setcategory] = useState('');
    const [pcity, setpcity] = useState('');
    const [pimage, setpimage] = useState('');
    const [pimage2, setpimage2] = useState('');
    const loginInitialValues = {
		email: "",
		password: "",
		open: false,
		error: false,
	};

	const [login, setLogin] = useState(loginInitialValues);
    const helper = (data) => {
		setLogin(data);
	};

    const location = useLocation();
    const { category,subcategory } = location.state || {};
    console.log(category);
    function MyNavigation()
    {
    
    navigate('/catpage')
    
    }
    const handleApi = () => {

        // navigator.geolocation.getCurrentPosition((position) => {
            const formData = new FormData();
            // formData.append('plat', position.coords.latitude)
            // formData.append('plong', position.coords.longitude)
            formData.append('pname', pname)
            formData.append('pdesc', pdesc)
            formData.append('price', price)
            formData.append('category', category)
            formData.append('pimage', pimage)
            formData.append('pcity', pcity)
            formData.append('userId',localStorage.getItem('userId'))
            // formData.append('pimage2', pimage2)
            // formData.append('userId', localStorage.getItem('userId'))
           console.log("thedata is",formData)
            const url = 'http://localhost:8000/addproduct';
            axios.post('http://localhost:8000/addproduct', formData,{
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              })
                .then((res) => {
                    if (res.data.message) {
                        alert(res.data.message); 
                        navigate('/')
                    }
                })
                .catch((err) => {
                    alert(err.response.data)
                })
        // })



    }

    return (
        <div>
            {/* <Header /> */}
            <div className="abcde" id="abcde">
    <div className="FreshMango"><a href='' onClick={MyNavigation}><span className="cherry" aria-label="Back"><i className="bi bi-arrow-left" style={{fontSize:"30px"}}></i></span></a></div>
   
   
</div>
            <div className="p-33">

                <h2> ADD PRODUCT HERE : </h2>
                {/* <div className="bigbox"> */}
                    <div className="headings" style={{textAlign:"left",marginTop:"10px"}}>
                    <h4 >SELECTED CATEGORY</h4>
                    <span>
        <p style={{ display: "inline",color:"gray" }}>{category} / {subcategory}</p> &nbsp; &nbsp;
        <Link to="/catpage" style={{ display: "inline",color:"black" }}> <b><u>Change</u></b></Link>
    </span>
                    </div>
                    <div className="bottomBox">
                <label className="label" id="lab" > Product Name </label> 
                <input className="form-control" id="inp" type="text" value={pname}
                    onChange={(e) => { setpname(e.target.value) }} />
                <label className="label" id="lab"> Product Description </label> 
                <input className="form-control" id="inp" type="text" value={pdesc}
                    onChange={(e) => { setpdesc(e.target.value) }} />
                <label className="label" id="lab"> Product Price</label> 
                <input className="form-control" id="inp" type="text" value={price}
                    onChange={(e) => { setprice(e.target.value) }} />
                
                <label className="label" id="lab"> Product Location </label> 
                <select className="form-control" id="inp" value={pcity}
                    onChange={(e) => { setpcity(e.target.value) }}>
                    <option> Darjeeling </option>
                    <option> Ajmer </option>
                    <option> Agra </option>
                    <option> Manali </option>
                    <option> Ranthambore </option>
                    <option> Jaipur </option>
                    <option> Udaipur </option>
                    
                    {/* {
                        categories && categories.length > 0 &&
                        categories.map((item, index) => {
                            return (
                                <option key={'option' + index}> {item} </option>
                            )
                        })
                    } */}
                </select>
                <label className="label" id="lab"> Product Image </label> 
                <input className="form-control" id="inp"  type="file"
                    onChange={(e) => {
                        setpimage(e.target.files[0])
                    }} />

                {/* <label className="label" id="lab"> Product Second Image </label> */}
                {/* <input className="form-control" id="inp" type="file"
                    onChange={(e) => {
                        setpimage2(e.target.files[0])
                    }} /> */}</div>
                    <div className="footer">
                <button onClick={handleApi} className="btn btn-primary mt-3" id="btnn22"> SUBMIT </button></div>
                
            </div>
            </div>
        // </div>
    )
}

export default AddProduct;