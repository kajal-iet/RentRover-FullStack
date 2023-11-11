const ProductDetail = ({ product }) => {
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    
    return (
        <>
            <div style={{marginTop:"20px"}}>Available offers</div>
            <small style={{fontSize:"12px",float:"left",marginTop:"8px"}}>
                <div><i className="bi bi-tag-fill" style={{color:"green"}}></i> Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</div>
                <div><i className="bi bi-tag-fill" style={{color:"green"}}></i> Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</div>
                <div><i className="bi bi-tag-fill" style={{color:"green"}}></i> Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</div>
                <div><i className="bi bi-tag-fill" style={{color:"green"}}></i> Partner OfferExtra 10% off upto ₹500 on next furniture purchase</div>
            </small>
            <table style={{fontSize:"14px"}}>
                <tr>
                    <th>
                        <p style={{ color: '#878787' }}>Delivery</p></th>
                        <td>  <p style={{ fontWeight: 400, whiteSpace:"nowrap" }}>Delivery by {date.toDateString()} | ₹40</p></td>
                    </tr>
                    <tr>
                       <th> <p style={{ color: '#878787' }}>Warranty</p></th>
                       <td> <p>No Warranty</p></td>
                    </tr>
                    <tr>
                       <th> <p style={{ color: '#878787' }}>Seller</p></th>
                       <td> 
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            </td> 
                        </tr>
                   
                    
                    <tr>
                    <th>
                        <p style={{ color: '#878787' }}>Description</p></th>
                        <td><p>{product.pdesc}</p></td>
                    
                </tr>
            </table>
            {/* <div>GST invoice available</div>
                            <div>View more sellers starting from ₹329</div> */}
        </>
    )
}

export default ProductDetail;