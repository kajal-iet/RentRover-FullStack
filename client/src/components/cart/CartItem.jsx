import { addEllipsis } from '../../utils/common-utils';
import GroupButton from './ButtonGroup';
import './cartItem.css'
import axios from 'axios'
const CartItem = ({ item }) => {
    const userId = localStorage.getItem('userId');
    const productId=item._id;
    console.log("pid",productId,"id",userId)
    const handleRemove =async () => {
        // Send a request to your server to remove the item
        try {
            const response = await axios.post('http://localhost:8000/remove-from-cart', { userId, productId });
            window.location.reload();
            console.log(response.data.message);
        } catch (error) {
            console.error('Error removing item:', error.message);
        }
    };
    return (
        <div className='card2'  /*style={{borderTop:"1px solid #f0f0f0",borderRadius:"0px",display:"inline-block"}}*/>
            <div className='left2' >
                
                <img className='imgg' src={`http://localhost:8000/${item.pimage}`} style={{ height: 110, width: 110 }} />
               <div className="buttonCont">
                <GroupButton /></div>
            </div>
            <div className='box' style={{ margin: "20px",textAlign:"left" }}>
                <div>{addEllipsis(item.pdesc)}</div>
                <small className='small'>Seller:RetailNet
                
                </small>
                <div style={{margin: '20px 0'}}>
                    <span className='Cost'>₹{item.price}</span>&nbsp;&nbsp;&nbsp;
                    {/* <span className='MRP'><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp; */}
                    {/* <span className='discount'>{item.price.discount} off</span> */}
                </div>
                <button className='remove' onClick={handleRemove}>Remove</button>
            </div>
        </div>
    )
}

export default CartItem;