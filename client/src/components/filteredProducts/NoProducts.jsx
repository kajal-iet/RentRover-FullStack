import './noProducts.css'
import img from './NPS.png'


const NoProducts = () => {
//    const img="C:\Users\kukki\Downloads\Rentals-Website-main\Rentals-Website-main\client\src\components\filteredProducts\NPS.png"
    return (
        <div className="Component11">
            <div className="Container">
                <img className="imgg11" src={img} />
                <div className="typoo">There are no Renters of your Desired Item in this City </div>
                {/* <span className="Typography">Add items to it now.</span> */}
            </div>
        </div>
    )
}

export default NoProducts;