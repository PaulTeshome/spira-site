import React from 'react'
import  {Route, Routes} from "react-router-dom"
import './Login.css'
import LoginForm from './components/LoginForm'
import ForgotPsd from './components/ForgotPsd'
import ForgotPsdCode from './components/ForgotPsdCode'

function Login() {
  return (
    <div className='login-page'>
      
      <div className='login-card'>
        <Routes>
          <Route exact path="*" element={<LoginForm/>}/>
          <Route exact path="*/forgotpsd/*" element={<ForgotPsd/>}/>
          <Route exact path="*/forgotpsdcode/*" element={<ForgotPsdCode/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Login