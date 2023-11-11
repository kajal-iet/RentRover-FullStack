import React from 'react'
import img from './pics/1c.png'
import img2 from './pics/2c.png'
import img3 from './pics/3c.png'
import img4 from './pics/4c.png'
import img5 from './pics/5c.png'
import img6 from './pics/6c.png'
import img7 from './pics/7c.png'
export default function 
() {
  return (
    <div style={{backgroundColor:"white",marginBottom:"20px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",overflow:"overlay"}}>
    <div className='container my-3' style={{display:"flex",justifyContent:"space-between", backgroundColor:"white",width:"100%"}}>
        <figure className="products">
  <img src={img} className="img" style={{height:"120px",width:"120px"}} alt="..."/>
  <figcaption className="card-body">
   <strong>Hiking Gear</strong>
    </figcaption>
</figure>
<figure className="products">
  <img src={img2} className="img" style={{height:"120px",width:"120px"}} alt="..."/>
  <figcaption className="card-body">
  <strong>Seasonal Wear </strong>
    </figcaption>
</figure>
<figure className="products">
  <img src={img3} className="img" style={{height:"120px",width:"120px"}} alt="..."/>
  <figcaption className="card-body">
  <strong>Cabs/Vehicles</strong>
    </figcaption>
</figure>
<figure className="products">
  <img src={img4} className="img" style={{height:"120px",width:"120px"}} alt="..."/>
  <figcaption className="card-body">
  <strong> Camping Equipment</strong>
    </figcaption>
</figure>
<figure className="products">
  <img src={img5} className="img" style={{height:"120px",width:"120px"}} alt="..."/>
  <figcaption className="card-body">
  <strong>Tour Guide</strong> 
    </figcaption>
</figure>
<figure className="products">
  <img src={img6} className="img" style={{height:"120px",width:"120px"}} alt="..."/>
  <figcaption className="card-body">
  <strong>  Hotels</strong> 
    </figcaption>
</figure>
<figure className="products">
  <img src={img7} className="img" style={{height:"120px",width:"120px"}} alt="..."/>
  <figcaption className="card-body">
  <strong>Accessories</strong> 
    </figcaption>
</figure>
    </div></div>
  )
}
