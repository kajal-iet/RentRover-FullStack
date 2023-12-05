import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../../citywise/pics/banner pics/1.png'
import img2 from './pics/page2.png'
import img3 from '../../citywise/pics/banner pics/2.png'
import img4 from '../../citywise/pics/banner pics/3.png'
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
export default function Banner() {


  return (
    <>
    <div style={{backgroundColor:"white", boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
    <Carousel responsive={responsive}
    swipeable={false}
    draggable={false}
    infinite={true}
  autoPlay={true}
  autoPlaySpeed={3500}
  keyBoardControl={true}
    >
        <div>
        <img src={img1} style={{width:"100%",height:"380px"}}/>
        </div>
        <div >
        <img src={img2} style={{width:"100%",height:"380px"}}/>
        </div>
        <div >
        <img src={img3} style={{width:"100%",height:"380px"}}/>
        </div>
        <div >
        <img src={img4} style={{width:"100%",height:"380px"}}/>
        </div>

    </Carousel></div>
    </>
  )
}
