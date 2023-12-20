import { useEffect, useState } from "react";
// import Header from "./Header";
import { useNavigate, Link,useLocation } from "react-router-dom";
import { useMemo } from 'react';

import axios from "axios";
import LoginDialog from "../login/LoginDialog";
import './addProduct.css'
import stateCityData from '../stateCityData'
// import categories from "./CategoriesList";
// import API_URL from "../constants";

function AddProduct() {

    const navigate = useNavigate();
    const [pname, setpname] = useState('');
    const [pdesc, setpdesc] = useState('');
    const [price, setprice] = useState('');
    // const [category, setcategory] = useState('');
    const [pcity, setpcity] = useState('');
    const [selectedCity, setSelectedCity] = useState("");
    const [pimage, setpimage] = useState('');
    const [userCoordinates, setUserCoordinates] = useState(null);

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
    
    function MyNavigation()
    {
    
    navigate('/catpage')
    
    }
    const calculateDistance=(lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Distance in km
        
        return distance;
        }
        
        function deg2rad(deg) {
        return deg * (Math.PI / 180);
        }

    useEffect(() => {
        // Function to get user coordinates using navigator.geolocation
        const getUserCoordinates = () => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setUserCoordinates({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            },
            (error) => {
              console.error('Error getting user coordinates:', error);
            }
          );
        };
        console.log("loc",userCoordinates);
    
        getUserCoordinates();
      }, []);

      const filteredCities = useMemo(() => {
        if (!userCoordinates) return [];
      
        const { latitude, longitude } = userCoordinates;
      
        return Object.entries(stateCityData)
          .flatMap(([state, cities]) =>
            Object.entries(cities).map(([city, cityCoordinates]) => {
              const distance = calculateDistance(
                latitude,
                longitude,
                cityCoordinates.latitude,
                cityCoordinates.longitude
              );
      
              return {
                state,
                city,
                distance,
              };
            })
          )
          .filter((city) => city.distance <= 100); // Adjust the distance as needed
      }, [userCoordinates, stateCityData]);
      
    const handleApi = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const formData = new FormData();
            formData.append('plat', position.coords.latitude)
            formData.append('plong', position.coords.longitude)
            formData.append('pname', pname)
            formData.append('pdesc', pdesc)
            formData.append('price', price)
            formData.append('category', category)
            formData.append('pimage', pimage)
            formData.append('pcity', selectedCity)

            // formData.append('userId',localStorage.getItem('userId'))
            // formData.append('pimage2', pimage2)
            formData.append('userId', localStorage.getItem('userId'))
           console.log("thedata is",formData)
            const url = 'http://localhost:8000/addproduct';
            axios.post('http://localhost:8000/addproduct', formData,{
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              })
                .then((res) => {
                    if (res.data.message) { 
                        console.log("button clicked");
                        
                        setpname('');
                        setpdesc('');
                        setprice('');
                        setSelectedCity('');
                        setpimage('');
                    }
                })
                .catch((err) => {
                    // alert(err.response.data)
                    console.log("error is",err);
                })
        })



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
                    <div className="headings" style={{textAlign:"left",marginTop:"35px"}}>
                    <h4 >SELECTED CATEGORY</h4>
                    <span>
        <p style={{ display: "inline",color:"gray" }}>{category} / {subcategory}</p> &nbsp; &nbsp;
        <Link to="/catpage" style={{ display: "inline",color:"black" }}> <b><u>Change</u></b></Link>
    </span>
                    </div> 
                    <form action="">
                    <div className="bottomBox">
                      
                <label className="label" id="lab" > Product Name </label> 
                <input required className="form-control" id="inp" type="text" value={pname}
                    onChange={(e) => { setpname(e.target.value) }} autoComplete="off"/>
                <label className="label" id="lab"> Product Description </label> 
                <input required className="form-control" id="inp" type="text" value={pdesc}
                    onChange={(e) => { setpdesc(e.target.value) }} autoComplete="off"/>
                <label className="label" id="lab"> Product Price</label> 
                <input required className="form-control" id="inp" type="text" value={price}
                    onChange={(e) => { setprice(e.target.value) }} autoComplete="off"/>
            



   
<label className="label" id="lab">
  Product Location
</label>
<select
  className="form-control"
  id="inp"
  value={selectedCity}
  onChange={(e) => setSelectedCity(e.target.value)}
  required={selectedCity === ""}
>
  {selectedCity === "" && <option value="" disabled>Select City</option>}
  {filteredCities.map((city) => (
    <option key={city.city} value={city.city}>
      {city.city}, {city.state} ({city.distance.toFixed(2)} km)
    </option>
  ))}
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
                <button type="submit" onClick={()=>{handleApi(); navigate("/")}} className="btn btn-primary mt-3" id="btnn22"> SUBMIT </button>
               </div>
                </form>
            </div>
            
            </div>
           
       
    )
}

export default AddProduct;