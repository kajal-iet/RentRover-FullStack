import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';


const SearchFiltered = () => {
  const [products, setProducts] = useState([]);
  
    const location = useLocation();
    const { text} = location.state || {};
    const navigate=useNavigate()
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
    console.log("hello",text)
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/get-products`);
        if (response.data.products) {
          setProducts(response.data.products);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (

    <div className='container'>
        <div className="bigbox" style={{marginTop:"20px", textAlign:"center"}}>
      <h2>Search Results for {text}</h2>
      <div className='d-flex justify-content-center flex-wrap'>
      {products
              .filter((product) =>
			  product.pname.toLowerCase().includes(text.toLowerCase()) ||
			  product.pdesc.toLowerCase().includes(text.toLowerCase())
              )
              .filter((product) => {
                const userLoc = localStorage.getItem("userLoc");
                if (userLoc && userLoc!=="null,null") {
                  const [userLat, userLng] = userLoc.split(",").map(Number);
                  
                  const productLoc = product.pLoc.coordinates;
                  
                  if(productLoc){
                  const distance = calculateDistance(userLat, userLng, productLoc[0], productLoc[1]); // Swap coordinates if needed
                        
                  // Consider products within 60km distance
                  return distance <= 150;}
                  else{
                    return;
                    }
                }
                // console.log("mic testi")
                return true; // No user location, include all products
                })
              .map((product) => (
                <div className="card" style={{ margin: "20px",width:"250px",cursor:"pointer" }}  onClick={()=>{
                    navigate(`/product/${product._id}`)
                   }}>
                     <img width="250px" height="150px" src={`http://localhost:8000/${product.pimage}`} alt={product.pname} />
         
                     <h3 className="m-2 price-text text-danger"> Rs. {product.price} /- </h3>
                     <p className="m-2"> {product.pname}  | {product.category} </p>
                     <p className="m-2 text-success"> {product.pdesc} </p>
                   </div>
              ))}
      </div></div>
    </div>
  );
};

export default SearchFiltered;
