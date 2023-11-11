import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';


const FilteredProducts = () => {
  const [products, setProducts] = useState([]);
  
    const location = useLocation();
    const { city, category } = location.state || {};
  const navigate=useNavigate()
    // Now, city and category should be defined
    console.log('City:', city);
    console.log('Category:', category);

//  const city="Manali";
//  const category="Vehicles"
  useEffect(() => {
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
      <h2>{category} in {city}</h2>
      <div className='d-flex justify-content-center flex-wrap'>
        {products.map((item, index) => (
           (item.pcity===city  && item.category===category) &&
          <div className="card" style={{ margin: "20px" }} key={index} onClick={()=>{
           navigate(`/product/${item._id}`)
          }}>
            <img width="250px" height="150px" src={`http://localhost:8000/${item.pimage}`} alt={item.pname} />

            <h3 className="m-2 price-text text-danger"> Rs. {item.price} /- </h3>
            <p className="m-2"> {item.pname}  | {item.category} </p>
            <p className="m-2 text-success"> {item.pdesc} </p>
          </div>
        ))}
      </div></div>
    </div>
  );
};

export default FilteredProducts;
