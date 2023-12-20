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
            {user && user.username && <h6><i class="bi bi-pencil-fill"></i> {user.username}</h6>}
            {user && user.mobile && <h6><i class="bi bi-telephone-fill"></i> {user.mobile}</h6>}
            {user && user.email && <h6><i class="bi bi-envelope-at"></i> {user.email}</h6>}
        </div>
    </div>


    <div>
        <small style={{ fontSize: "12px", float: "left", marginTop: "20px", marginLeft: "0" }}>
            <div><i className="bi bi-tag-fill" style={{ color: "green" }}></i> Rent products at your own liberty</div>
            <div><i className="bi bi-tag-fill" style={{ color: "green" }}></i> Efficient. Effective. Effortless.</div>
            <div><i className="bi bi-tag-fill" style={{ color: "green" }}></i> Experience More, Own Less – Renting, the New Norm.</div>
            <div><i className="bi bi-tag-fill" style={{ color: "green" }}></i> Unlock Possibilities – Rent Your Way to Adventure!</div>
            <div><i className="bi bi-tag-fill" style={{ color: "green" }}></i> Checked for stability; free replacement for any defects.</div>
        </small>
    </div>

</div>

        </>
    )
}

export default ProductDetail;   