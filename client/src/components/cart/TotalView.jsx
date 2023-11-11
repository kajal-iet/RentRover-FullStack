import { useState, useEffect } from 'react';
import './totalView.css'
const TotalView = ({ cartItems }) => {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        totalAmount();
    }, [cartItems]);
    
    const totalAmount = () => {
        let price = 0, discount = 0;
        cartItems.map(item => {
            price += item.price.mrp
            discount += (item.price.mrp - item.price.cost) 
        })
        setPrice(price);
        setDiscount(discount);
    }

    return (
        <div className='card' style={{textAlign:"left"}}>  {/* className={classes.component}> */}
            <div className='Header1'>
                <h1 className='Heading1'>PRICE DETAILS</h1>
            </div>
            <div className='Container1'>
                <div className='Typography1'>Price ({cartItems?.length} item)
                    <span className='Price' >₹{price}</span>
                </div >
                <div className='Typography1'>Discount
                    <span className='Price'>-₹{discount}</span>
                </div >
                <div className='Typography1'>Delivery Charges
                    <span className='Price'>₹40</span>
                </div >
                <div className='TotalAmount1'>Total Amount
                    <div className='Price'>₹{price - discount + 40}</div>
                </div>
                <div className='Discount'>You will save ₹{discount - 40} on this order</div>
            </div>
        </div>
    )
}

export default TotalView;