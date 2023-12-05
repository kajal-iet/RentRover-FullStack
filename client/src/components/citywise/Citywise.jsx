import React, { useState } from 'react'
import './citywise.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from "./pics/common/1.png"
import img2 from "./pics/common/2.png"
import img3 from "./pics/common/3.png"
import { useNavigate, useParams } from 'react-router-dom';
import { cityData } from '../../constants1/cities';
import FilteredProducts from '../filteredProducts/FilteredProducts';
const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
export default function Citywise() {
    const { city } = useParams();
    const navigate=useNavigate();
    const [selectedCity, setSelectedCity] = useState(cityData.find((cityN) => cityN.title.shortTitle === city));

    const handleElementClick = (category) => {
      // Assuming you want to filter based on both city and category
      // You can update the state with the selected category and navigate to the filtered products page
      setSelectedCity({ ...selectedCity, selectedCategory: category });
      console.log('Navigating with city:', city, 'and category:', category);
      navigate('/filtered-products', { state: { city:city, category:category } });
    };
    
  if (!selectedCity) {
    // Handle case where the city is not found
    return <div className="upper">
    <div className="top">
        {city}
    </div>
    <section className='element'>
    <div className="row">
        <div className='element-col'  onClick={() => handleElementClick("Vehicles")}>
            <span>Book Your Personal Vehicle <i className="bi bi-arrow-right" style={{float:"right"}}></i> </span>
        </div>
        <div className='element-col'  onClick={() => handleElementClick("Rooms")}>
            <span>Book Hotels <i className="bi bi-arrow-right" style={{float:"right"}}></i> </span>
        </div>
        <div className='element-col'  onClick={() => handleElementClick("Clothes")}>
            <span>Choose your desired Seasonal Wear <i className="bi bi-arrow-right" style={{float:"right"}}></i> </span>
        </div>
    </div>
    <div className="row">
        <div className='element-col'  onClick={() => handleElementClick("Guides")}>
            <span>Hire a Tour Guide Beforehand <i className="bi bi-arrow-right" style={{float:"right"}}></i> </span>
        </div>
        <div className='element-col'  onClick={() => handleElementClick("Hiking Gear")}>
            <span>Be Prepared with All the required Hiking Gear <i className="bi bi-arrow-right" style={{float:"right"}}></i> </span>
        </div>
        <div className='element-col'  onClick={() => handleElementClick("Camera & Accessories")}>
            <span>Capture Your Journey with Best Cameras <i className="bi bi-arrow-right" style={{float:"right"}}></i> </span>
        </div>
    </div>
    <div className="row">
        <div className='element-col'  onClick={() => handleElementClick("Camping Gear")}>
            <span>Let's Camp <i className="bi bi-arrow-right" style={{float:"right"}}></i> </span>
        </div>
        <div className='element-col'  onClick={() => handleElementClick("Other")}>
            <span>Others <i className="bi bi-arrow-right" style={{float:"right"}}></i> </span>
        </div>
        <div className='element-col' id='empty'>
            <span> </span>
        </div>
    </div>
    </section>
    <hr />
    <div className="lowermain">
        <div className="lower">
        <Carousel responsive={responsive}
    swipeable={false}
    draggable={false}
    infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
    >
       
        
              <div>
                <img src={img1} style={{ width: "100%", height: "380px" }} alt={city} /> </div>
                <div>  <img src={img2} style={{ width: "100%", height: "380px" }} alt={city} /> </div>
                <div> <img src={img3} style={{ width: "100%", height: "380px" }} alt={city} />
              </div>
           

        
    </Carousel>
   
        </div></div>
</div>;
  }
  return (
    <div className='outer'>
        <div className="upper">
            <div className="top">
                {city}
            </div>
            <section className='element'>
            <div className="row">
                <div className='element-col'  onClick={() => handleElementClick("Vehicles")}>
                    <span>Book Your Personal Vehicle <i className="bi bi-arrow-right" style={{float:"right"}}></i> </span>
                </div>
                <div className='element-col'  onClick={() => handleElementClick("Rooms")}>
                    <span>Book Hotels <i className="bi bi-arrow-right" style={{float:"right"}}></i> </span>
                </div>
                <div className='element-col'  onClick={() => handleElementClick("Clothes")}>
                    <span>Choose your desired Seasonal Wear <i className="bi bi-arrow-right" style={{float:"right"}}></i> </span>
                </div>
            </div>
            <div className="row">
                <div className='element-col'  onClick={() => handleElementClick("Guides")}>
                    <span>Hire a Tour Guide Beforehand <i className="bi bi-arrow-right" style={{float:"right"}}></i> </span>
                </div>
                <div className='element-col'  onClick={() => handleElementClick("Hiking Gear")}>
                    <span>Be Prepared with All the required Hiking Gear <i className="bi bi-arrow-right" style={{float:"right"}}></i> </span>
                </div>
                <div className='element-col'  onClick={() => handleElementClick("Camera & Accessories")}>
                    <span>Capture Your Journey with Best Cameras <i className="bi bi-arrow-right" style={{float:"right"}}></i> </span>
                </div>
            </div>
            <div className="row">
                <div className='element-col'  onClick={() => handleElementClick("Camping Gear")}>
                    <span>Let's Camp <i className="bi bi-arrow-right" style={{float:"right"}}></i> </span>
                </div>
                <div className='element-col'  onClick={() => handleElementClick("Other")}>
                    <span>Others <i className="bi bi-arrow-right" style={{float:"right"}}></i> </span>
                </div>
                <div className='element-col' id='empty'>
                    <span> </span>
                </div>
            </div>
            </section>
            <hr />
        </div>
        <div className="lowermain">
        <div className="lower">
        <Carousel responsive={responsive}
    swipeable={false}
    draggable={false}
    infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
    >
        {/* <div>
        <img src={img} style={{width:"100%",height:"380px"}}/>
        </div>
        <div>
        <img src={img1} style={{width:"100%",height:"380px"}}/>
        </div>
        <div>
        <img src={img2} style={{width:"100%",height:"380px"}}/>
        </div> */}
          {selectedCity.images.map(image => (
              <div key={image}>
                <img src={image} style={{ width: "100%", height: "380px" }} alt={selectedCity.title} />
              </div>
            ))}

        
    </Carousel>
     {/* <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img src={image} style={{ width: '100%', height: '380px' }} alt={`City ${index + 1}`} />
              </div>
            ))}
          </Carousel> */}
        </div></div>
    </div>
  )
}
