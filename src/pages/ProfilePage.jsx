import React, { useState } from 'react'
import '../assets/css/profile.css'
import user from '../assets/images/user.png'
import deposit from '../assets/images/deposit.png'
import withdraw from '../assets/images/withdraw.png'
import transaction from '../assets/images/transaction.png'
import name from '../assets/images/name.png'
import password from '../assets/images/password.png'
import bank from '../assets/images/bank.png'
 import logout from '../assets/images/logout.png'
 import { Link } from 'react-router-dom'
import { Button, Form, Modal } from 'react-bootstrap'

const ProfilePage = () => {
    const lists=[
        {id:1,img:deposit,link:'/deposit',name:"Deposit"},
        {id:2,img:withdraw,link:'/with-draw',name:"With Draw"},
        {id:3,img:transaction,link:'/transactions',name:"Transactions"},
     ]
     const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='p-3' >
      <div className="profileBg rounded-4 p-2 p-sm-3 ">
       <div className="row">
       <div className="col-3 col-sm-4">
            <img src={user} className='user' />
        </div>
        <div className="col-9 col-sm-8">
            <small className='d-block my-0 py-1'>Name : luckywin123</small>
            <small className='d-block my-0 py-1'>Balance : 0 MMK</small>
            <small className='d-block my-0 py-1'>Commission : 0 MMK</small>
            <small className='d-block my-0 py-1'>Phone : *****12345</small>
        </div>
       </div>
      </div>
      <div className="profileBg my-2 rounded-4 p-2 p-sm-3 d-flex align-items-center justify-content-between">
        {lists.map((item)=>{
            return <Link key={item.id} to={item.link} className='text-center'>
            <img src={item.img} className='icon' />
            <small className='d-block'>{item.name}</small>
            </Link>
        })}
      </div>
      <div className="profileBg rounded-4 p-2 p-sm-3 mb-5">
            <Link to={'/update-profile'} className="d-block mb-3">
                <img src={name} className='icon me-2'/>
                <small>Name - User231</small>
            </Link>
            <div className="mb-3" onClick={handleShow}>
                <img src={password}  className='icon me-2'/>
                <small>Update Password</small>
            </div>
            <Link to={'/banking'} className="d-block mb-3">
                <img src={bank} className='icon me-2'/>
                <small>Bank Account</small>
            </Link>
            <div className="mb-3">
                <img src={logout} className='icon me-2'/>
                <small>Logout</small>
            </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-black'>Old Password</Form.Label>
        <Form.Control type="password" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-black'>New Password</Form.Label>
        <Form.Control type="password" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-black'>Repeat New Password</Form.Label>
        <Form.Control type="password" />
       </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
           <Button variant="danger" onClick={handleClose}>
           Update Password
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProfilePage
