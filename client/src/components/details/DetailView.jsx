// import { useState, useEffect } from 'react';
// import './detailview.css'
// // import { styled, Box, Typography, Grid } from '@mui/material';
// import {useNavigate} from 'react-router-dom'
// import axios from 'axios'
// import ProductDetail from './ProductDetail';
// import ActionItem from './ActionItem';
// import { useParams } from 'react-router-dom';
// import { getProductById } from '../../service/api';
// import { useDispatch, useSelector } from 'react-redux';

// import { getProductDetails } from '../../redux/actions/productActions';

// const DetailView = () => {
//     const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    
//     const { id } = useParams();

//     const { loading, product } = useSelector(state => state.getProductDetails);

//     const dispatch = useDispatch();
    
//     useEffect(() => {
//         if(product && id !== product.id)   
//             dispatch(getProductDetails(id));
//     }, [dispatch, product, id, loading]);

//     return (
//         <div>
        
//             { product && Object.keys(product).length &&
//                 <div className='container'> 
//                 <div className="overall">
//                     <div >
//                         <ActionItem product={product} />
//                     </div>
//                     <div className='right'>
//                         <div className='cont'>{product.title.longTitle}</div>
//                         <div className='cont' style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
//                             8 Ratings & 1 Reviews
//                             <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
//                         </div>
//                         <div className='cont'>
//                             <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
//                             <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
//                             <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
//                         </div>
//                         <ProductDetail product={product} />
//                     </div></div>
//                 </div>
//             }   
//         </div>
//     )
// }

// export default DetailView;

import React, { useState, useEffect } from 'react';
import './detailview.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDetail from './ProductDetail';
import ActionItem from './ActionItem';

const DetailView = () => {
  
  const navigate = useNavigate();
  const { id } = useParams();
  const productId = String(id);
  const [product, setProduct] = useState(null);

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
    <div>
      {product && (
        <div className="container">
          <div className="overall">
            <div>
              <ActionItem product={product} />
            </div>
            <div className="right">
              <div className="cont">{product.pname}</div>
              <div className="cont" style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 Ratings & 1 Reviews
                
              </div>
              <div className="cont">
                <span style={{ fontSize: 28 }}>₹{product.price}</span>&nbsp;&nbsp;&nbsp;
                
                &nbsp;&nbsp;&nbsp;
                {/* <span style={{ color: '#388E3C' }}>{product.price.discount} off</span> */}
              </div>
              <ProductDetail product={product} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailView;
