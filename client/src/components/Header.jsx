import React, { useState, useEffect } from "react";
import "./header.css";
import img from "../images/logo3.png";
import img1 from "../images/profileicon.png";
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios'
import stateCityData from "./stateCityData";
// import { useSelector, useDispatch } from "react-redux"; // hooks
// import { getProducts as listProducts } from "../redux/actions/productActions";

// import { DataContext } from '../context/DataProvider'

export default function Header(props) {
	const navigate = useNavigate();
	const [text, setText] = useState();
	const [open, setOpen] = useState(true);
    const [products, setProducts] = useState([]);
	const [selectedState, setSelectedState] = useState('');
	const [selectedCity, setSelectedCity] = useState('');
  
	const handleStateChange = (event) => {
	  const newState = event.target.value;
	  setSelectedState(newState);
	  setSelectedCity('');
	};
  
	const handleLocationChange = (event) => {
		const selectedLocation = event.target.value;
		const [state, city] = selectedLocation.split('-');
		// console.log(state,"state",city,"city");
		if (city) {
		  // City is selected
		  setSelectedState(state);
		  setSelectedCity(city);
		  navigate(`/city/${city}`)
		} else {
		  // State is selected, reset city
		  setSelectedState(selectedLocation);
		  setSelectedCity('');
		}
	  };
	
  
	useEffect(() => {
		// Fetch products data from the server
		const fetchProducts = async () => {
		  try {
			const response = await axios.get("http://localhost:8000/get-products");
			setProducts(response.data.products);
		  } catch (error) {
			console.error("Error fetching products:", error);
		  }
		};
	
		fetchProducts();
	  }, []);
	const getText = (text) => {
		setText(text);
		setOpen(false);
	};
	// const { cartItems } = useSelector((state) => state.cart);
	// const getProducts = useSelector((state) => state.getProducts);
	// const { products } = getProducts;
	const cartItems = []; 
	const getProducts = { products: products };

	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(listProducts());
	// }, [dispatch]);
	const handleLogout = async (e) => {
		e.preventDefault();
		try {
			// props.setAcc("");
			window.localStorage.clear();
			window.location.reload();
		} catch (ee) {
			console.log(ee.response.data.message);
		}
	};
	const handleSuggestionClick = (productId) => {
		// Navigate to the product details page when a suggestion is clicked
		navigate(`/product/${productId}`);
		
		// Clear the input field and close the dropdown
		setText('');
		setOpen(false);
	  };
	  const handleSearchClick = (text) => {
		// Navigate to the product details page when a suggestion is clicked
		navigate('/search-filtered', { state: { text:text } });

		// Clear the input field and close the dropdown
		setText('');
		setOpen(false);
	  };
	return (
		<nav className="navbar navbar-expand-lg fs-5" style={{ backgroundColor: "#015e65" }}>
			<div className="container-fluid">
				<Link to="/" className="navbar-brand me-3" style={{ textDecoration: "none" }}>
					<img className="logo" src={img} />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
						{/* <label htmlFor="location">Select Location:</label> */}
						<li className="nav-item my-2 mt-3 ms-4 " style={{width:"15%"}}>
						
	 
      	
      <select className="form-select" id="location" value={`${selectedState}-${selectedCity}`} onChange={handleLocationChange}>
        <option selected > {selectedCity? selectedCity :"Select Location"}</option>
        {Object.keys(stateCityData).map((state, index) => (
          <optgroup key={index} label={state} >
            {Object.keys(stateCityData[state]).map((city, cityIndex) => (
      <option key={cityIndex} value={`${state}-${city}`}>
        {city}
      </option>
    ))}
          </optgroup>
        ))}
      </select>
</li>
      {/* {selectedState && selectedCity && (
        <p style={{fontSize:"14px",marginTop:"8px"}}>
          You selected: {selectedCity}, {selectedState}
        </p>
      )} */}
	
						
						{/* <li className="nav-item dropdown my-2">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								For You
							</a>
							<ul className="dropdown-menu my-2">
								<li>
									<a className="dropdown-item" href="#">
										Cabs
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Hotels
									</a>
								</li>

								<li>
									<a className="dropdown-item" href="#">
										Camera & Accessories
									</a>
								</li>
							</ul>
						</li> */}

						<form className="d-flex ms-3 my-2" role="search" style={{ width: "" }} onSubmit={(e) => {
    e.preventDefault(); // Prevent default form submission behavior
    handleSearchClick(text); // Call your search click handler
  }}>
							<input className="form-control ms-5 me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "500px" }} value={text} onChange={(e) => getText(e.target.value)} />
							<button className="btn btn-outline-success" type="submit" style={{ backgroundColor: "#85ef57", color: "#015e65" }} >
								Search
							</button>
							
							{text && (
          <ul
            className="dropdown-menu col-12 show"
            id="myUL"
            hidden={open}
          >
            {products
              .filter((product) =>
			  product.pname.toLowerCase().includes(text.toLowerCase()) ||
			  product.pdesc.toLowerCase().includes(text.toLowerCase())
              )
              .map((product) => (
                <li key={product._id} >
                  <Link
                    to={`/product/${product._id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={() => handleSuggestionClick(product._id)}
                  >
                   {product.pname} - {product.pdesc}    
              </Link>
                </li>
              ))}
          </ul>
        )}
						</form>
						<li className="nav-item my-2 mx-5">
							{localStorage.getItem('token') ? (
								<>
									{" "}
									<div className="wrapper" style={{zIndex:"1"}}>
										<input id="toggler2" type="checkbox" className="check2" />
										<label htmlFor="toggler2">
											<img className="logo" src={img1} />
										</label>
										<div className="dropdown2" id="dropdown22">
											<span style={{ whiteSpace: "nowrap", cursor: "pointer" }}>
												<Link to="/myAds" style={{ textDecoration: "none", color: "black" }}>
												<i class="bi bi-megaphone"></i> My Ads
												</Link>
											</span>

											<span style={{ whiteSpace: "nowrap", cursor: "pointer" }}>
												<a href="/" style={{ textDecoration: "none", color: "black" }} onClick={handleLogout}>
													<i className="bi bi-power"></i> Logout
												</a>
											</span>
										</div>
									</div>
								</>
							) : (
								<button
									className="btn btn-outline-success"
									type="submit"
									style={{ backgroundColor: "#85ef57", color: "#015e65", padding: "10px 10px", width: "90px" }}
									onClick={() => {
										props.helper({ open: true });
									}}
								>
									<strong>Login</strong>
								</button>
							)}
						</li>
						<li className="nav-item mx-4 my-2">
							<a className="nav-link" href="#" onClick={()=>{if (!localStorage.getItem('token')) {
            props.helper({ open: true });
							} else navigate('/catpage')}}>
								Become a Seller
							</a>
						</li>
						<li className="nav-item mx-4 my-2">
							<Link to="/cart" className="nav-link" >
								Cart{" "}
								{cartItems.length ? (
									<i className="bi bi-cart3">
										{" "}
										<span className="position-absolute top-3 start-90 translate-middle bg-warning rounded-circle" style={{ fontSize: "10px", color: "white", padding: "3px 7px 3px 7px", fontWeight: "bold" }}>
											{cartItems.length}{" "}
										</span>
										<span class="visually-hidden">unread messages</span>
									</i>
								) : (
									<i className="bi bi-cart3"></i>
								)}{" "}
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}