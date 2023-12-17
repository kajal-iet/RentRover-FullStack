import React, { useEffect, useState } from 'react'
import Navbar from './navbar/Navbar'
import Banner from './banner/Banner'
import { useDispatch,useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/productActions';
import Slide from './Slide';
import { useNavigate } from 'react-router-dom';
import Rent from './RENT/Rent';

const Home= ()=> {
  const {products}=useSelector(state=>state.getProducts)
  //changes
  const [selectedCity, setSelectedCity] = useState(null);
  const navigate = useNavigate();

  const handleCityClick = (city) => {
    setSelectedCity(city);
    navigate(`/city/${city}`);
  };
  //till here
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  return (
    <div style={{backgroundColor:"#DCDCDC",paddingLeft:"20px",paddingRight:"20px",paddingTop:"5px",paddingBottom:"5px",marginBottom:"0px"}}>
        <Navbar/>
        <Banner/>
        <Slide onCityClick={handleCityClick} products={products}/>
        <Rent/>
    </div>
  )
}

export default Home;
