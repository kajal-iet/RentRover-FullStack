// import {  } from 'react';
import './actionitem.css'
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
// import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/paytm';

// import { addToCart } from '../../redux/actions/cartActions';
// import { useDispatch } from 'react-redux';

const ActionItem = ({ product,id,props }) => {
    const navigate = useNavigate();
    

    const addItemToCart = async () => {
        // e.stopPropagation();
        let userId = localStorage.getItem('userId');

        if (!userId) {
            props.helper({open:true})
            return;
        }

        const url = 'http://localhost:8000/liked-products';
        const data = { userId, id }
        console.log("data is:",data);
        await axios.post(url, data)
            .then((res) => {
                if (res.data.message) {
                    navigate('/cart');
                }
            })
            .catch((err) => {
                alert('Server Err.')
            })
        
    }

    return (
        <div className='left'>
            <img src={`http://localhost:8000/${product.pimage}`} className='img' alt='img'/><br />
            <button onClick={() => addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}} variant="contained" className='btn2'><i className="bi bi-cart3"></i>Add to Cart</button>
            <button /*onClick={() => buyNow()}*/ style={{background: '#fb641b'}} variant="contained" className='btn2'> Buy Now</button>
        </div>
    )
}

export default ActionItem;