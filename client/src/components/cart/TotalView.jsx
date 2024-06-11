import { useState, useEffect } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import './totalView.css'
const TotalView = ({ cartItems }) => {
    const [price, setPrice] = useState(0);
    // const [discount, setDiscount] = useState(0)

    useEffect(() => {
        totalAmount();
    }, [cartItems]);
    console.log('items', cartItems);
    const totalAmount = () => {
        let price = 0;
        cartItems.map(item => {
            const priceString = item.price; // Assuming item.price is the string "Starting at $40/day"
            const priceMatch = priceString.match(/\d+/); // Extract numerical part
            if (priceMatch) {
                price += parseInt(priceMatch[0]); // Convert to integer and add to total
            }
            // discount += (item.price.mrp - item.price.cost);
        });
       
        setPrice(price);
        // setDiscount(discount);
    }
    
  const buyNow=async()=>{
    const stripe = await loadStripe("pk_test_51PODdJ05xIQc2Sw5zMfFKQhLbBbh23dilIqP6BGn4GTYxUDy8nwiaB1Hy68RzbVYPFwDEEui5Ewnsv3n6qUAmw7T00EoBmz9Hi");
    const body = {
        products:cartItems,
        Amount:parseInt(price)
    }
    const headers = {
        "Content-Type":"application/json"
    }
    const response = await fetch("http://localhost:8000/checkout",{
        method:"POST",
        headers:headers,
        body:JSON.stringify(body)
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
        sessionId:session.id
    });
    
    if(result.error){
        console.log(result.error);
    }
}

    return (
        <div className='card' style={{textAlign:"left"}}>  {/* className={classes.component}> */}
            <div className='Header1'>
                <h1 className='Heading1'>PRICE DETAILS</h1>
            </div>
            <div className='Container1'>
                <div className='Typography1'>Price ({cartItems?.length} item)
                    <span className='Price' >₹{parseInt(price)}</span>
                </div >
                {/* <div className='Typography1'>Discount
                    <span className='Price'>-₹{discount}</span>
                </div > */}
                
                <div className='TotalAmount1'>Total Amount
                    <div className='Price'>₹{parseInt(price)}</div>
                </div>
                {/* <div className='Discount'>You will save ₹{discount - 40} on this order</div> */}
            </div>
            <div className='bottom'>
                        <button className='StyledButton2' onClick={() => buyNow()} variant="contained">Place Order</button>
                    </div> 
        </div>
    )
}

export default TotalView;