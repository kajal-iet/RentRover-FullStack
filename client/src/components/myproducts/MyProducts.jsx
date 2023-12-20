import { useEffect, useState } from "react";
import Header from "../Header";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import ConfirmationModal from "./ConfirmationModal";
// import Categories from "./Categories";
// import { FaHeart } from "react-icons/fa";
// import './Home.css';
// import API_URL from "../constants";


function MyProducts() {

    const navigate = useNavigate()
    const [isModalOpen, setModalOpen] = useState(false);
    const [products, setproducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [cproducts, setcproducts] = useState([]);
    const [search, setsearch] = useState('');
    const [isUser,setIsUser]=useState(true);
    
    useEffect(() => {
        const url = 'http://localhost:8000/my-product';
        let data = { userId: localStorage.getItem('userId') }
       if(data.userId!==null){
        axios.post(url, data)
            .then((res) => {
                if (res.data.products) {
                    setproducts(res.data.products);
                }
            })
            .catch((err) => {
                alert(err)
            })
    }
else{
    setIsUser(false)
}}, [])

    const handlesearch = (value) => {
        setsearch(value);
    }
    const handleConfirmation = () => {
        // Handle the removal
        // handleLike(item._id);
        setModalOpen(false);
      };
    const handleClick = () => {
        let filteredProducts = products.filter((item) => {
            if (item.pname.toLowerCase().includes(search.toLowerCase()) ||
                item.pdesc.toLowerCase().includes(search.toLowerCase()) ||
                item.category.toLowerCase().includes(search.toLowerCase())) {
                return item;
            }
        })
        setcproducts(filteredProducts)

    }

    const handleCategory = (value) => {
        let filteredProducts = products.filter((item, index) => {
            if (item.category === value) {
                return item;
            }
        })
        setcproducts(filteredProducts)
    }

    const handleLike = (productId) => {
        let userId = localStorage.getItem('userId');

        const url = 'http://localhost:8000/my-product';
        const data = { userId, productId }
        axios.post(url, data)
            .then((res) => {
                if (res.data.message) {
                    alert('Liked.')
                }
            })
            .catch((err) => {
                alert('Server Err.')
            })

    }


    return (
        <>
        {isUser? 
        <div>
          
            <h3 style={{marginTop:"30px",marginBottom:"20px",textAlign:"center"}}> MY PRODUCTS  </h3>

            <div className="d-flex justify-content-center flex-wrap">
                {products && products.length > 0 &&
                    products.map((item, index) => {

                        return (
                            <div key={item._id} className="card m-3 " style={{width:"300px"}}>
                                
                                <img width="100%" height="200px" src={`http://localhost:8000/${item.pimage}`} />
                                {/* <p className="m-2"> {item.pname}  | {item.category} </p> */}
                                <h3 className="m-2 text-danger"> Rs. {item.price}/day </h3>
                                <h5 className="m-2 text-primary"> {item.pname} | {item.category}</h5>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between"  }}>
  <p className="m-2 text-success" style={{ marginRight: "10px" ,wordWrap:"break-word",width:"70%"}}>
    {item.pdesc}
  </p>
  <i style={{marginRight:"10px",cursor:"pointer",fontSize:"22px"}} onClick={() => {setSelectedProductId(item._id); setModalOpen(true)}} className="bi bi-trash3-fill"></i>
</div>
<ConfirmationModal
        productId={selectedProductId}
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        onConfirm={handleConfirmation}
      />
                            </div>
                        )

                    })}
            </div>



        </div> : navigate('/')}

        </>
    )
}

export default MyProducts;