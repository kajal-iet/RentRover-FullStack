import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/home/Home";
import LoginDialog from "./components/login/LoginDialog";
import Citywise from "./components/citywise/Citywise";
import DetailView from "./components/details/DetailView";
import AddProduct from "./components/addProducts/AddProduct";
import CatPage from "./components/addProducts/CatPage"
import { createBrowserRouter, RouterProvider, Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./components/cart/Cart";
import FilteredProducts from "./components/filteredProducts/FilteredProducts";
import SearchFiltered from "./components/filteredProducts/SearchFiltered";

function App() {
	const loginInitialValues = {
		email: "",
		password: "",
		open: false,
		error: false,
	};

	const [login, setLogin] = useState(loginInitialValues);

	const helper = (data) => {
		setLogin(data);
	};

	const Hom = () => {
		return (
			<div className="App">
				<Header data={login} helper={helper} />
				<Home />

				<LoginDialog data={login} helper={helper} />
			</div>
		);
	};
	const City = () => {
		return (
			<div className="App">
				<Header data={login} helper={helper} />

				<Citywise />
				<LoginDialog data={login} helper={helper} />
			</div>
		);
	};
	const Carts = () => {
		return (
			<div className="App">
				<Header data={login} helper={helper} />

				<Cart />
				<LoginDialog data={login} helper={helper} />
			</div>
		);
	};
	const Item = () => {
		return (
			<div className="App">
				<Header data={login} helper={helper} />

				<DetailView data={login} helper={helper}/>
				<LoginDialog data={login} helper={helper} />
			</div>
		);
	};
	const AddP = () => {
		return (
			<div className="App">
				{/* <Header data={login} helper={helper} /> */}

				<AddProduct />
				{/* <LoginDialog data={login} helper={helper} /> */}
			</div>
		);
	};
	const FilP = () => {
		return (
			<div className="App">
				<Header data={login} helper={helper} />

				<FilteredProducts />
				<LoginDialog data={login} helper={helper} />
			</div>
		);
	};
	const SearchFil = () => {
		return (
			<div className="App">
				<Header data={login} helper={helper} />

				<SearchFiltered />
				<LoginDialog data={login} helper={helper} />
			</div>
		);
	};
	const CatP = () => {
		return (
			<div className="App">
				{/* <Header data={login} helper={helper} /> */}

				<CatPage />
				{/* <LoginDialog data={login} helper={helper} /> */}
			</div>
		);
	};
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Hom />,
		},
		{
			path: "/city/:city",
			element: <City />,
		},
		{
			path: "/product/:id",
			element: <Item />,
		},
		{
			path: "/cart",
			element: <Carts />,
		},
		{
			path: "/addproduct",
			element: <AddP />,
		},
		{
			path: "/catpage",
			element: <CatP />,
		},
		{
			path: '/filtered-products',
			element: <FilP />,
		  },
		  {
			path: '/search-filtered',
			element: <SearchFil />,
		  },
	]);
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;