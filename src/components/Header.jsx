import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import noti from '../assets/images/noti.png'
import customer from '../assets/images/customer.png'
import en from '../assets/images/en.png'
import mm from '../assets/images/mm.png'
import { Dropdown } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const langs=[
    {img:en,name:'English',value:'en'},
    {img:mm,name:'Myanmar',value:'mm'},
  ]
  const [selectedLang,setSelectedLang]=useState(langs[0]);
  const location=useLocation();
     if(location.pathname==='/login' ||location.pathname==='/register') return null;
  return (
    <header className='cursor-pointer bg-secondary py-2 px-3 d-flex align-items-center justify-content-between'>
      <Link to={'/'}>
      <img src={logo} className='logo' />
      </Link>
      <div className=' d-flex align-items-center gap-1 gap-sm-3'>
        <Link to={'/profile'} >
        <p className='mt-3 headerBalance fw-semibold'>Balance 0 MMK</p>
        </Link>
        <img src={noti} className='noti' />
        <Link to={'https://telegram.org/'}>
        <img src={customer} className='noti' />
         </Link>
          <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      <img src={selectedLang.img}  className='noti' />
      </Dropdown.Toggle>

      <Dropdown.Menu>
       
        {langs.map((item)=>{
          return  <Dropdown.Item  onClick={()=>setSelectedLang(item)} key={item.value}>
          <img src={item.img}  className='noti me-2' />
          {item.name}
          </Dropdown.Item>
        })}
        </Dropdown.Menu>
    </Dropdown>
      </div>
    </header>
  )
}

export default Header
