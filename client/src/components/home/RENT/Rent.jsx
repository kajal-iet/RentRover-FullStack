import React from 'react'
import './rent.css'
import img1 from '../RENT/1.png'
import img2 from '../RENT/2.png'
import img3 from '../RENT/3.png'
import img4 from '../RENT/4.png'
import img5 from '../RENT/5.png'
export default function Rent() {
  return (
    <div className='rentbody'>
        <h2 style={{color:"#545454",marginTop:"8px",fontSize:"25px"}}>Features</h2>
    <h3 style={{color:"#545454",marginTop:"8px",fontSize:"32px"}}>OUR SERVICES!</h3>
    <div class="rowww">
    <div class="boxxx">
        <img src={img1}/>
        <h3>Personalized Discoveries</h3>
        <p>Personalized guides showcase destinations and recommend specific areas for exploration, highlighting the necessary equipment and accessories for an immersive experience.</p>
    </div>
    <div class="boxxx">
        <img src={img2}/>
        <h3>Direct Seller Interaction</h3>
        <p>A centralized platform where local sellers offer a diverse range of travel accessories and equipment, allowing users to find, compare, and rent items needed for their adventures.</p>
    </div>
    <div class="boxxx">
        <img src={img5}/>
        <h3>Comprehensive Rental Hub</h3>
        <p>Your exploration, our priority. Our comprehensive solutions cover everything you need for a seamless experience. From diverse rental options to detailed area insights, we've got your adventure covered.

        </p>
    </div>
    <div class="boxxx">
        <img src={img3}/>
        <h3>Curated Travel Experiences</h3>
        <p>Expertly curated content provides insights into destinations, guiding users to discover unique areas and the essential accessories required, ensuring a hassle-free and enjoyable travel experience.</p>
    </div>
    </div>
    </div>
  )
}
