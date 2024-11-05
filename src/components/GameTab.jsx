import React, { useState } from 'react'
import jackpot from '../assets/images/hot.png'
import g1 from '../assets/images/g1.png'
import g2 from '../assets/images/g2.png'
import g3 from '../assets/images/g3.png'
import g4 from '../assets/images/g4.png'
import g5 from '../assets/images/g5.png'
import fh1 from '../assets/images/fh1.png'
import fh2 from '../assets/images/fh2.png'
import fh3 from '../assets/images/fh3.png'
import fh4 from '../assets/images/fh4.png'
import fh5 from '../assets/images/fh5.png'
import ah1 from '../assets/images/ah1.png'
import ah2 from '../assets/images/ah2.png'
 import hot from '../assets/images/hot.gif'
 import slot from '../assets/images/slot.gif'
 import fish from '../assets/images/fish.gif'
 import arcade from '../assets/images/arcade.gif'
import '../assets/css/games.css'
import sp1 from '../assets/images/sp1.png'
import sp2 from '../assets/images/sp2.png'
import sp3 from '../assets/images/sp3.png'
import sp4 from '../assets/images/sp4.png'
import sp5 from '../assets/images/sp5.png'
import fp1 from '../assets/images/fp1.png'
import fp2 from '../assets/images/fp2.png'
import fp3 from '../assets/images/fp3.png'
import fp4 from '../assets/images/fp4.png'
import ap1 from '../assets/images/ap1.png'
import ap2 from '../assets/images/ap2.png'
import ap3 from '../assets/images/ap3.png'
import { Link } from 'react-router-dom'


 const GameTab = () => {
    const [selectedGameTab,setSelectedGameTab]=useState(1);
    const tabs=[
        {id:1,name:"Hot",img:hot}, {id:2,name:"Slots",img:slot}, 
        {id:3,name:"Fishing",img:fish}, {id:4,name:"Arcade",img:arcade},
    ]
  return (
    <div className="row mb-5 pb-5">
        <div className='col-3'> 
          <div className="d-flex flex-column">
            {tabs.map((item)=>{
                return <div onClick={()=>setSelectedGameTab(item.id)} className={`mb-2 text-center p-2 rounded-3 ${selectedGameTab==item.id ? 'gameTabActive' :'gameTab'}`}>
                    <img src={item.img} className='gameTabIcon' />
                    <small className="fw-semibold text-xs d-block text-center">{item.name}</small>
                </div>
            })}
          </div>
        </div>
        <div className='col-9 ps-0 pr-2'>
        {selectedGameTab==1 && <HotTab/> }
          {selectedGameTab==2 && <SlotTab/> }
          {selectedGameTab==3 && <FishTab/> }
          {selectedGameTab==4 && <ArcadeTab/> }
        </div>
      </div>
  )
}

export default GameTab

const SlotTab=()=>{
    const imgs=[
        { id:1,name:'Pragmatic',img:sp1 }, { id:2,name:'Jili',img:sp2 }, { id:3,name:'PGSoft',img:sp3 },
        { id:4,name:'JDB',img:sp4 }, { id:5,name:'KA',img:sp5 },
    ]
    return <div>
        {imgs.map((item)=>{
            return <Link key={item.id} to={`/games?provider=${item.name}`} className='d-block mb-3'>
                <img src={item.img} className='gameTabImg' />
            </Link>
        })}
    </div>
}
const FishTab=()=>{
    const imgs=[
        { id:1,name:'JILI',img:fp1 }, { id:2,name:'JDB',img:fp2 }, { id:3,name:'Spade',img:fp3 },
        { id:4,name:'KA',img:fp4 }
    ]
    return <div>
        {imgs.map((item)=>{
            return <Link key={item.id} to={`/games?provider=${item.name}`} className='d-block mb-3'>
                <img src={item.img} className='gameTabImg' />
            </Link>
        })}
    </div>
}
const ArcadeTab=()=>{
    const imgs=[
        { id:1,name:'JILI',img:ap1 }, { id:2,name:'KA',img:ap2 }, { id:3,name:'AceWin',img:ap3 },
      
    ]
    return <div>
        {imgs.map((item)=>{
            return <Link key={item.id} to={`/games?provider=${item.name}`} className='d-block mb-3'>
                <img src={item.img} className='gameTabImg' />
            </Link>
        })}
    </div>
}
const HotTab=()=>{
    return <div>
        <img src={jackpot} className='jackpot rounded-3' />
        <div className="mb-4">
            <div className="d-flex align-items-center gap-2 my-2">
                <small className='text-xs fw-semibold d-block text-nowrap'>Popular Slot Games</small>
                <div style={{width:'50%'}} className=' border-top border-gold'>
                 </div>
            </div>
           <div className="row">
           {[g1,g2,g3,g4,g5].map((item,index)=>{
                return <div key={index} className='col-6 col-md-4 col-lg-6 px-2 hotGameContainer'>
                    <img src={item} className='img-fluid gameImg ' />
                    <img src={hot} className='hotIcon' />
                </div>
            })}
           </div>
        </div>
        <div className="mb-4">
            <div className="d-flex align-items-center gap-2 my-2">
                <small className='text-xs fw-semibold d-block text-nowrap'>Popular Fishing Games</small>
                <div style={{width:'50%'}} className=' border-top border-gold'>
                 </div>
            </div>
           <div className="row">
           {[fh1,fh2,fh3,fh4,fh5].map((item,index)=>{
                return <div key={index} className='col-6 col-md-4 col-lg-6 px-2 hotGameContainer'>
                    <img src={item} className='img-fluid gameImg ' />
                    <img src={hot} className='hotIcon' />
                </div>
            })}
           </div>
        </div>
        <div className="mb-4">
            <div className="d-flex align-items-center gap-2 my-2">
                <small className='text-xs fw-semibold d-block text-nowrap'>Popular Arcade Games</small>
                <div style={{width:'50%'}} className=' border-top border-gold'>
                 </div>
            </div>
           <div className="row">
           {[ah1,ah2].map((item,index)=>{
                return <div key={index} className='col-6 col-md-4 col-lg-6 px-2 hotGameContainer'>
                    <img src={item} className='img-fluid gameImg ' />
                    <img src={hot} className='hotIcon' />
                </div>
            })}
           </div>
        </div>
    </div>
}