import { addEllipsis } from '../../utils/common-utils';
import GroupButton from './ButtonGroup';
import './cartItem.css'
const CartItem = ({ item, removeItemFromCart }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    return (
        <div className='card2'  /*style={{borderTop:"1px solid #f0f0f0",borderRadius:"0px",display:"inline-block"}}*/>
            <div className='left2' >
                
                <img className='imgg' src={item.url} style={{ height: 110, width: 110 }} />
               <div className="buttonCont">
                <GroupButton /></div>
            </div>
            <div className='box' style={{ margin: "20px",textAlign:"left" }}>
                <div>{addEllipsis(item.title.longTitle)}</div>
                <small className='small'>Seller:RetailNet
                
                </small>
                <div style={{margin: '20px 0'}}>
                    <span className='Cost'>₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp;
                    <span className='MRP'><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span className='discount'>{item.price.discount} off</span>
                </div>
                <button className='remove' onClick={() => removeItemFromCart(item.id)}>Remove</button>
            </div>
        </div>
    )
}

export default CartItem;