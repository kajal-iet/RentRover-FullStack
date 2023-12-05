import React from 'react'
import Carousel from 'react-multi-carousel';
import './slide.css'
import {cityData}  from '../../constants1/cities';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'
// import img from './pictures/agra.png'
const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
export default function Slide({onCityClick}) {


  return (
    <>
    <div className='main' style={{backgroundColor:"white",marginBottom:"12px"}}>
    <div className='heading'>
        <span>Explore India</span>
    </div>
    
    <div className='car'>
    <Carousel responsive={responsive}
    swipeable={false}
    draggable={false}
    infinite={true}
  autoPlay={true}
  autoPlaySpeed={1500}
  keyBoardControl={true}
  centerMode={true}
    >
       { cityData.map(product=>(
        <> <Link
        to={`/city/${product.title.shortTitle}`}
        style={{ textDecoration: "none", color: "black" }}
        onClick={() => onCityClick(product.title.shortTitle)}
      >  
    <div className="boximage">
          
            <img className='image' src={product.url} alt="product" style={{height:"160px",width:"250px"}} key={product.id}/></div> 
            <div style={{fontWeight:"500",marginTop:"10px"}}>{product.title.shortTitle}</div>
            <small style={{color:"green"}}>{product.tagline}</small>
            </Link></> 
        ))}

    </Carousel></div>
    </div>
    </>
  )
}
