import React from 'react'
import '../assets/css/auth.css'
import logo from '../assets/images/logo.png'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className='authBg py-5 px-3'>
      <div className="text-center">
      <img src={logo} className='logo' />
      </div>
      <div className="authForm p-4 mt-4">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text"  />
       </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text"  />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password"  />
       </Form.Group>
      </Form>
      <div className="text-center">
      <button className="btnWhite py-2 ">
        Register
      </button>
      </div>
      <hr className='my-3'/>
      <div className="text-center ">
      <Link to={'/login'}>
      <button className="btnGold py-2 px-5">
        Login
      </button>
      </Link>
      </div>
      </div>
    </div>
  )
}

export default RegisterPage
