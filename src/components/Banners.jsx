import React from 'react'
import b1 from '../assets/images/b1.png'
import b2 from '../assets/images/b2.png'
import b3 from '../assets/images/b3.png'
import b4 from '../assets/images/b4.png'
import { Carousel } from 'react-bootstrap'
const Banners = () => {
    const banners=[b1,b2,b3,b4]
  return (
    <Carousel>
       {banners.map((item,index)=>{
        return <Carousel.Item key={index}>
         <img src={item} className='bannerImg rounded-2' />
      </Carousel.Item>
      })}
    </Carousel>
  )
}

export default Banners
