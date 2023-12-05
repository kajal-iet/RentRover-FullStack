import { useState } from "react";
import axios from 'axios'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const ProductDetail = ({ product }) => {
    const [user,setUser]=useState();
    const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [blockedDates, setBlockedDates] = useState([new Date('2023-12-10'), new Date('2023-12-15')]);
  const [isStartDateCalendarOpen, setIsStartDateCalendarOpen] = useState(false);
  const [isEndDateCalendarOpen, setIsEndDateCalendarOpen] = useState(false);

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
    const handleStartDateChange = (date) => {
        setStartDate(date);
        setIsStartDateCalendarOpen(false); // Close the calendar after selection
      };
    
      const handleEndDateChange = (date) => {
        setEndDate(date);
        setIsEndDateCalendarOpen(false); // Close the calendar after selection
      };
    
      const handleStartDateCalendarClick = () => {
        setIsStartDateCalendarOpen(!isStartDateCalendarOpen);
      };
    
      const handleEndDateCalendarClick = () => {
        setIsEndDateCalendarOpen(!isEndDateCalendarOpen);
      };
      const handleCalendarClick = (date) => {
        // Add logic to handle blocked dates or other actions
        console.log("hello")
      };
    return (
        
        <>
            
                            <div style={{marginTop:"20px"}}>
    
    

    <div style={{fontSize:"14px", marginTop:"10px"}}>
        <h3>Choose Your Journey Dates: </h3>
        <div>
      <div>
        <h5>Start Date</h5>
        <input
          type="text"
          value={startDate ? startDate.toDateString() : "Select Start Date"}
          onClick={handleStartDateCalendarClick}
          readOnly
        />
        {isStartDateCalendarOpen && (
          <Calendar onChange={handleStartDateChange} value={startDate} onClickDay={(date) => handleCalendarClick(date)} tileDisabled={({ date }) => blockedDates.includes(date)} />
        )}
      </div>

      <div>
        <h5>End Date</h5>
        <input
          type="text"
          value={endDate ? endDate.toDateString() : "Select End Date"}
          onClick={handleEndDateCalendarClick}
          readOnly
        />
        {isEndDateCalendarOpen && (
          <Calendar onChange={handleEndDateChange} value={endDate} onClickDay={(date) => handleCalendarClick(date)} tileDisabled={({ date }) => blockedDates.includes(date)} />
        )}
      </div>
    </div>
    </div>

    <div className="contacts" style={{textAlign:"left",marginTop:"48px"}}>
            {product.addedBy &&
                        <button className="btn btn-primary" style={{width:"20%",fontSize:"12px"}} onClick={() => handleContact(product.addedBy)}>
                            SHOW CONTACT DETAILS <i class="bi bi-plus"></i>
                        </button>}
                        <div className="contacts" style={{textAlign:"left",marginTop:"15px"}}>
                    {user && user.username && <h6>{user.username}</h6>}
                    {user && user.mobile && <h6>{user.mobile}</h6>}
                    {user && user.email && <h6>{user.email}</h6>}</div></div>

    <div style={{fontSize:"14px", marginTop:"10px"}}>
        Rental Terms:
        <ul>
            <li>Deposit Requirements: {product.depositRequirements}</li>
            <li>Cancellation Policies: {product.cancellationPolicies}</li>
        </ul>
    </div>
</div>

<small style={{fontSize:"12px",float:"left",marginTop:"8px"}}>
    <div><i className="bi bi-tag-fill" style={{color:"green"}}></i> Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</div>
    <div><i className="bi bi-tag-fill" style={{color:"green"}}></i> Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</div>
    <div><i className="bi bi-tag-fill" style={{color:"green"}}></i> Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</div>
    <div><i className="bi bi-tag-fill" style={{color:"green"}}></i> Partner OfferExtra 10% off upto ₹500 on next furniture purchase</div>
</small>

<table style={{fontSize:"14px"}}>
    <tr>
        <th>
            <p style={{ color: '#878787' }}>Delivery</p>
        </th>
        <td>
            <p style={{ fontWeight: 400, whiteSpace:"nowrap" }}>Delivery by {date.toDateString()} | ₹40</p>
        </td>
    </tr>
    <tr>
        <th>
            <p style={{ color: '#878787' }}>Warranty</p>
        </th>
        <td>
            <p>No Warranty</p>
        </td>
    </tr>
    <tr>
        <th>
            <p style={{ color: '#878787' }}>Seller</p>
        </th>
        <td>
            <span style={{ color: '#2874f0' }}>{product.seller}</span>
        </td>
    </tr>
    <tr>
        <th>
            <p style={{ color: '#878787' }}>Description</p>
        </th>
        <td>
            <p>{product.pdesc}</p>
        </td>
    </tr>
</table>
        </>
    )
}

export default ProductDetail;   