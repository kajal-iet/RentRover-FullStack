import { useEffect,useState } from 'react';
import './cart.css'
import axios from 'axios'
// import { Box, Typography, Button, Grid, styled } from '@mui/material';
import { useParams } from 'react-router-dom';

// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';

// import { post } from '../../utils/paytm';
// import { payUsingPaytm } from '../../service/api';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect( () => {
    // Fetch cartItems from the database
    const userId = localStorage.getItem('userId');

    if (userId) {
      const url = `http://localhost:8000/liked-products/${userId}`;

  //       axios.get(url)
  //       .then((res) => {
  //         if (res.data && res.data.cartItems) {
  //           setCartItems(res.data.cartItems);
  //         }
  //       })
  //       .catch((err) => {
  //         console.error('Error fetching cartItems:', err);
  //       });
  //   }
  // }, []);
  axios
        .get(url)
        .then((res) => {
          if (res.data && res.data.cartItems) {
            setCartItems(res.data.cartItems);
          }
        })
        .catch((err) => {
          console.error('Error fetching cartItems:', err);
        })
        .finally(() => {
          setLoading(false); // Set loading to false after data is fetched
        });
    }
  }, []);
 
    return (
        <>
         {loading ? (
          <div>
        <h2 style={{marginTop:"50px"}}>Loading....</h2></div> // Display a loading indicator while fetching data
      ) : cartItems.length ?( 
            <div className='component2' style={{backgroundColor:"red"}}>
                <div className='left'>
                    <h1 className='Header2'>
                        <span className='Typo' style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</span>
                    </h1>
                        {   cartItems.map(item => (
                                <CartItem item={item} />
                            ))
                        }
                    <div className='bottom'>
                        <button className='StyledButton2' /*onClick={() => buyNow()}*/ variant="contained">Place Order</button>
                    </div>
                </div>
                <div className='right' >
                    <TotalView cartItems={cartItems} />
                </div>
            </div>) : <EmptyCart />
        }
        </>

    )
}

export default Cart;