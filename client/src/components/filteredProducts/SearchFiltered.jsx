import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';


const SearchFiltered = () => {
  const [products, setProducts] = useState([]);
  
    const location = useLocation();
    const { text } = location.state || {};
    const navigate=useNavigate()

  useEffect(() => {
    console.log("hellp",text)
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
              .map((product) => (
                <div className="card" style={{ margin: "20px" }}  onClick={()=>{
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
