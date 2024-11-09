import React, { useContext, useState } from 'react'
import jackpot from '../assets/images/hot.png'
import g1 from '../assets/images/g1.png'
import g2 from '../assets/images/g2.png'
import g3 from '../assets/images/g3.png'
import g4 from '../assets/images/g4.png'
import g5 from '../assets/images/g5.png'
import hot from '../assets/images/hot.gif'
import slot from '../assets/images/slot.gif'
import arcade from '../assets/images/arcade.gif'
import '../assets/css/games.css'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../contexts/LanguageContext'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseUrl'


 const GameTab = () => {
    const {content, lan} = useContext(LanguageContext);
    const [selectedGameTab,setSelectedGameTab]=useState(1);
    const tabs=[
        {id:1,name: content?.game_type?.hot,img:hot}, 
        {id:2,name: content?.game_type?.slot,img:slot}, 
        {id:3,name: content?.game_type?.casino,img:arcade}, 
        // {id:4,name: "Arcade",img:arcade},
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
        {selectedGameTab==1 && <HotTab content={content} lan={lan} /> }
          {selectedGameTab==2 && <SlotTab content={content}/> }
          {selectedGameTab==3 && <CasinoTab content={content} /> }
          {/* {selectedGameTab==4 && <ArcadeTab/> } */}
        </div>
      </div>
  )
}
export default GameTab
// provider lists
const SlotTab=()=>{
    const {data} = useFetch(BASE_URL + "/gameTypeProducts/2");
    let slots = data?.products;
    return <div>
        {slots && slots.map((item, index)=>{
            return <Link key={index} to={`/games?provider=${item.id}&&type=${item.pivot.game_type_id}`} className='d-block mb-3'>
                <img src={item.imgUrl} className='gameTabImg' />
            </Link>
        })}
    </div>
}
const CasinoTab=()=>{
    const {data} = useFetch(BASE_URL + "/gameTypeProducts/6");
    let casinos = data?.products;
    return <div>
        {casinos && casinos.map((item, index)=>{
            return <Link key={index} to={`/games?provider=${item.id}&&type=${item.pivot.game_type_id}`} className='d-block mb-3'>
                <img src={item.imgUrl} className='gameTabImg' />
            </Link>
        })}
    </div>
}
const HotTab=({content, lan})=>{
    return <div>
        {/* <img src={jackpot} className='jackpot rounded-3' /> */}
        <div className="mb-4">
            <div className="d-flex align-items-center gap-2 my-2">
                <small className='text-xs fw-semibold d-block text-nowrap'>{content?.game_type?.hot} {lan == "en" ? "Games" : ""}</small>
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
    </div>
}