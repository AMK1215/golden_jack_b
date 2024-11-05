import React, { useState } from 'react'
import kpay from '../assets/images/kpay.png'
import wavepay from '../assets/images/wavepay.png'
import kbz from '../assets/images/kbz.png'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'
import toast from 'react-hot-toast'


const DepositPage = () => {
    const banks=[
        {id:1,img:kpay,name:'U Sai Than Aung',type:'Kpay'},
        {id:2,img:wavepay,name:'U Sai Than Aung',type:'Wave Pay'},
        {id:3,img:kbz,name:'U Sai Than Aung',type:'KBZ Bank'},
     ]
     const [selectedBank,setSelectedBank]=useState(null);
     const copyFn=(value)=>{
      navigator.clipboard.writeText(value);
      toast.success('Copied to Clipboard!')
      }
  return (
    <div className='p-3 pb-5 mb-5'>
      <p className='fw-semibold'>Deposit Form </p>
      <div className="mb-3">
        <small className="d-block fw-semibold mb-2">Choose Payment Type
        </small>
        <Dropdown style={{width:'100%'}} data-bs-theme="">
        <Dropdown.Toggle style={{width:'100%'}} className='customInput p-2 text-start ' id="dropdown-button-dark-example1" variant="">
            Choose Payment Type
        </Dropdown.Toggle>

        <Dropdown.Menu style={{width:'100%'}}>
             {banks.map((item)=>{
                return <Dropdown.Item onClick={()=>setSelectedBank(item)} className='p-1' >
                <img src={item.img} className='inputImg me-2' />
                <small>{item.name}</small>
              </Dropdown.Item>
            })}
        </Dropdown.Menu>
      </Dropdown>
       </div>
       <p className='fw-semibold px-5'>{selectedBank?.type}</p>
       {selectedBank && <div className='text-center selectedBank py-2 px-5 my-3 mx-auto rounded-4 w-max'>
        <p className='my-0 py-0'>{selectedBank.name}</p>
        <p className='text-dark py-1  mb-0 fw-semibold'>012343243434343</p>
        <Button onClick={()=>copyFn('012343243434343')} variant="secondary" size="sm">
          Copy
        </Button>
       </div> }
      <div className="mb-3">
      <small className="d-block fw-semibold mb-2">Amount
        <span className="text-danger"> ( Minimum amount 3,000 )</span>
      </small>
      <input type="text" className='customInput p-2 ' />
       </div>
       <div className="mb-3">
      <small className="d-block fw-semibold mb-2">Last Transaction Id 6
       </small>
      <input type="text" className='customInput p-2 ' />
       </div>
       <button className="btn bg-white w-full mt-3 text-black rounded-5">Submit</button>
    </div>
  )
}

export default DepositPage
