import { useState } from "react";
import axios from 'axios'

import 'react-calendar/dist/Calendar.css';
const ProductDetail = ({ product }) => {
    const [user,setUser]=useState();
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
             <div style={{ marginTop: "10px"}}>
    <div className="contacts" style={{ textAlign: "left", marginTop: "48px", marginLeft: "0" }}>
        {product.addedBy &&
            <button className="btn btn-primary" style={{ width: "25%", fontSize: "12px", marginLeft: "0" }} onClick={() => handleContact(product.addedBy)}>
                SHOW CONTACT DETAILS <i className="bi bi-plus"></i>
            </button>}
        <div className="contacts" style={{ textAlign: "left", marginTop: "15px", marginLeft: "0" }}>
            {user && user.username && <h6>{user.username}</h6>}
            {user && user.mobile && <h6>{user.mobile}</h6>}
            {user && user.email && <h6>{user.email}</h6>}
        </div>
    </div>

    <div style={{ fontSize: "14px", marginTop: "10px", marginLeft: "0" }}>
        {/* Rental Terms:
        <ul>
            <li>Deposit Requirements: {product.depositRequirements}</li>
            <li>Cancellation Policies: {product.cancellationPolicies}</li>
        </ul> */}
    </div>

    <div>
        <small style={{ fontSize: "12px", float: "left", marginTop: "8px", marginLeft: "0" }}>
            <div><i className="bi bi-tag-fill" style={{ color: "green" }}></i> Rent products at your own liberty</div>
            <div><i className="bi bi-tag-fill" style={{ color: "green" }}></i> Efficient. Effective. Effortless.</div>
        </small>
    </div>

</div>

        </>
    )
}

export default ProductDetail;   