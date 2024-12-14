import React, { useContext, useState } from 'react'
import '../assets/css/auth.css'
import logo from '../assets/images/logo.png'
import { Form, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../contexts/LanguageContext'
import useLogin from '../hooks/useLogin';
import BASE_URL from '../hooks/baseUrl'
import AuthCheck from '../helpers/AuthCheck'

const LoginPage = () => {
  // AuthCheck();
  const { content } = useContext(LanguageContext);
  const [user_name, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading, error } = useLogin();
  const handleLogin = async (e) => {
    e.preventDefault();
    let url = BASE_URL + '/login';
    let inputData = {
      user_name,
      password
    }
    await login(url, inputData);
  }

  return (
    <div className='authBg py-5 px-3'>
      <div className="text-center">
        <img src={logo} width={150} className='rounded-circle' />
      </div>
      <div className="authForm p-4 mt-4">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{content?.profile?.username}</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={user_name}
            />
            {error && error.user_name && <span className=''>{error.user_name}</span>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{content?.auth?.password}</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {error && error.password && <span className=''>{error.password}</span>}
          </Form.Group>
          <div className="text-center">
            <button className="btnWhite py-2 ">
              {loading ? <Spinner className='me-1' size="sm" /> : ""}
              {content?.auth?.login}
            </button>
          </div>
        </Form>

        <hr className='my-3' />
        <div className="text-center ">
          <Link to={'/register'}>
            <button className="btnGold py-2 px-5">
              {content?.auth?.register}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
