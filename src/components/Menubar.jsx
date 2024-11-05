import React from 'react'
import home from '../assets/images/home.png'
import promotion from '../assets/images/promo.png'
import deposit from '../assets/images/deposit.png'
import contact from '../assets/images/contact.png'
import profile from '../assets/images/profile.png'
import { Link, useLocation } from 'react-router-dom'


const Menubar = () => {
    const menus=[
        {id:1,img:home,name:'Home',link:'/'},
        {id:2,img:promotion,name:'Promotion',link:'/promotion'},
        {id:3,img:deposit,name:'Deposit',link:'/deposit'},
        {id:4,img:contact,name:'Contact',link:'https://telegram.org/'},
        {id:5,img:profile,name:'Profile',link:'/profile'},
     ]
     const location=useLocation();
     if(location.pathname==='/login' ||location.pathname==='/register') return null;
  return (
    <div className='bg-secondary menuBar rounded-top-4 px-2 pt-3'>
      <div className="d-flex align-items-center justify-content-between">
        {menus.map((item)=>{
            return <Link to={item.link} className='text-center' key={item.id}>
                <img src={item.img} className='mx-auto appMenuImg' />
                <p className='appMenuText'>{item.name}</p>
            </Link>
        })}
      </div>
    </div>
  )
}

export default Menubar
