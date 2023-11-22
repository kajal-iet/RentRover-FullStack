import { useState } from "react";
import axios from 'axios'
const ProductDetail = ({ product }) => {
    const [user,setUser]=useState();
    // const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    const handleContact = (addedBy) => {
        console.log('id', addedBy)
        const url = 'http://localhost:8000/get-user/' + addedBy;
        axios.get(url)
            .then((res) => {
                if (res.data.user) {
                    setUser(res.data.user)
                    console.log(user)
                }
            })
            .catch((err) => {
                alert('Server Err.')
            })
    }
    return (
        
        <>
            <div style={{marginTop:"20px", textAlign:"left"}} >Available offers</div>
            <small style={{fontSize:"12px",float:"left",marginTop:"8px",marginBottom:"20px",textAlign:"left"}}>
                <div><i className="bi bi-tag-fill" style={{color:"green"}}></i> Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</div>
                <div><i className="bi bi-tag-fill" style={{color:"green"}}></i> Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</div>
                <div><i className="bi bi-tag-fill" style={{color:"green"}}></i> Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</div>
                <div><i className="bi bi-tag-fill" style={{color:"green"}}></i> Partner OfferExtra 10% off upto ₹500 on next furniture purchase</div>
            </small>
            <div className="contacts" style={{textAlign:"left",marginTop:"48px"}}>
            {product.addedBy &&
                        <button className="btn btn-primary" style={{width:"20%",fontSize:"12px"}} onClick={() => handleContact(product.addedBy)}>
                            SHOW CONTACT DETAILS <i class="bi bi-plus"></i>
                        </button>}
                        <div className="contacts" style={{textAlign:"left",marginTop:"15px"}}>
                    {user && user.username && <h6>{user.username}</h6>}
                    {user && user.mobile && <h6>{user.mobile}</h6>}
                    {user && user.email && <h6>{user.email}</h6>}</div></div>

            {/* <div>GST invoice available</div>
                            <div>View more sellers starting from ₹329</div> */}
        </>
    )
}

export default ProductDetail;   