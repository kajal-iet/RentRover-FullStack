import { useState } from 'react';
import './actionitem.css'


import { useNavigate } from 'react-router-dom';
// import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/paytm';

import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const { id } = product;
        
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    // const buyNow = async () => {
    //     let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
    //     var information = {
    //         action: 'https://securegw-stage.paytm.in/order/process',
    //         params: response    
    //     }
    //     post(information);
    // }

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    return (
        <div className='left'>
            <img src={`http://localhost:8000/${product.pimage}`} className='img'/><br />
            <button onClick={() => addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}} variant="contained" className='btn2'><i className="bi bi-cart3"></i>Add to Cart</button>
            <button /*onClick={() => buyNow()}*/ style={{background: '#fb641b'}} variant="contained" className='btn2'> Buy Now</button>
        </div>
    )
}

export default ActionItem;