import { useEffect } from 'react';
import './cart.css'
// import { Box, Typography, Button, Grid, styled } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';

// import { post } from '../../utils/paytm';
// import { payUsingPaytm } from '../../service/api';

const Cart = () => {
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;
    const { id } = useParams();

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(cartItems && id !== cartItems.id)   
            dispatch(addToCart(id));
    }, [dispatch, cartItems, id]);

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    // const buyNow = async () => {
    //     let response = await payUsingPaytm({ amount: 500, email: 'kunaltyagi@gmail.com'});
    //     var information = {
    //         action: 'https://securegw-stage.paytm.in/order/process',
    //         params: response    
    //     }
    //     post(information);
    // }

    return (
        <>
        { cartItems.length ? 
            <div className='component2' style={{backgroundColor:"red"}}>
                <div className='left'>
                    <h1 className='Header2'>
                        <span className='Typo' style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</span>
                    </h1>
                        {   cartItems.map(item => (
                                <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                            ))
                        }
                    <div className='bottom'>
                        <button className='StyledButton2' /*onClick={() => buyNow()}*/ variant="contained">Place Order</button>
                    </div>
                </div>
                <div className='right' >
                    <TotalView cartItems={cartItems} />
                </div>
            </div> : <EmptyCart />
        }
        </>

    )
}

export default Cart;