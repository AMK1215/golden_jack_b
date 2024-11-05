import React from 'react'
import { useSearchParams } from 'react-router-dom'
import g1 from '../assets/images/g1.png'
import g2 from '../assets/images/g2.png'
import g3 from '../assets/images/g3.png'
import g4 from '../assets/images/g4.png'
import g5 from '../assets/images/g5.png'
import g6 from '../assets/images/g6.png'
import g8 from '../assets/images/g8.png'
import g9 from '../assets/images/g9.png'
import g10 from '../assets/images/g10.png'
import g11 from '../assets/images/g11.png'


const GamesPage = () => {
    const [searchParams]=useSearchParams();
    const games=[
      {id:1,img:g1,name:'Gates of Olympus 1000'},
      {id:2,img:g2,name:'Sweet Bonanza 1000'},
      {id:3,img:g3,name:'Starlight Princess 1000'},
      {id:4,img:g4,name:'Gates of Olympus'},
      {id:5,img:g5,name:'Sweet Bonanza'},
      {id:6,img:g6,name:'Starlight Princess'},
      {id:8,img:g8,name:'Sugar Rush 1000'},
      {id:9,img:g9,name:'Pyramid Bonanza'},
      {id:10,img:g10,name:'5 Lions Megaways'},
      {id:11,img:g11,name:'Sugar Rush'},
     ]
  return (
    <div className='p-3'>
      <div className="mb-4 d-flex align-items-center justify-content-between">
        <p className='fw-semibold pt-2'>{searchParams.get('provider')}</p>
        <input type="text" className='inputRed rounded-3 px-2 py-1' placeholder='Search Games...' />
      </div>
      <div className="row mb-5">
      {games.map((item)=>{
        return <div className='col-4  col-md-3 col-lg-4 px-2 px-md-3 px-lg-2 text-center cursor-pointer mb-2'>
          <img src={item.img} className='gameImg' />
          <small className="gameName fw-semibold ">{item.name}</small>
          <p className="gameProvider fw-bold">{searchParams.get('provider')}</p>
        </div>
      })}
      </div>
    </div>
  )
}

export default GamesPage
