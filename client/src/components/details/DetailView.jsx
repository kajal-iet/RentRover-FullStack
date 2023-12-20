import React, { useState, useEffect } from 'react';
import './detailview.css';
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDetail from './ProductDetail';
import ActionItem from './ActionItem';

const DetailView = (props) => {
  
  // const navigate = useNavigate();
  const { id } = useParams();
  const productId = String(id);
  const [product, setProduct] = useState(null);
console.log("lohin",props.login)
  useEffect(() => {
    console.log("ek object",productId)
    const fetchProductDetails = async () => {
      try {
        // 
        const response = await axios.get(`http://localhost:8000/get-product/${productId}`);
        setProduct(response.data.product); // Assuming your backend returns a single product
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  return (
    <div style={{textAlign:"left"}}>
      {product && (
        <div className="container">
          <div className="overall">
            <div>
              <ActionItem product={product} id={productId}/>
            </div>
            <div className="right" style={{marginLeft:"80px"}}>
              <div className="cont" style={{fontWeight:"600",color:"#6b0727"}}>{product.pname}</div>
              <small className="cont" style={{color:"#446114"}}>{product.pdesc}</small>
              {/* <div className="cont" style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 Ratings & 1 Reviews
                
              </div> */}
              <div className="cont" style={{color:"#875608",marginTop:"20px"}}>
                <span style={{ fontSize: 28 }}>₹{product.price}/day</span>&nbsp;&nbsp;&nbsp;
                
                &nbsp;&nbsp;&nbsp;
                {/* <span style={{ color: '#388E3C' }}>{product.price.discount} off</span> */}
              </div>
              <small className="cont"><i class="bi bi-geo-fill"></i> {product.pcity}</small>
              <ProductDetail product={product} data={props.login} helper={props.helper} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailView;
