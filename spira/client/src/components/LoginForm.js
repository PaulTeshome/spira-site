import React,{useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import PasswordInputComponent from './PasswordInputComponent'
import { name_validation} from './utils/inputValidations'
import {BsFillCheckSquareFill, BsFillXSquareFill} from 'react-icons/bs'
import { HashLink as Link} from 'react-router-hash-link'
import './styles/LoginForm.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
    const [submitSuccess,setSubmitSuccess]= useState(false)
    const [failure,setFailure]= useState(false)
    const [success_msg,setMsg] = useState('')
    
    const navigate= useNavigate();
    useEffect(()=>{
      document.title='Admin Login'
    },[])
    
  
    const methods= useForm()
  
    const {handleSubmit}=methods
  
    const submitInputs= handleSubmit((data)=>{
      console.log('inputs',data)

      axios.post('/auth/login',data)
      .then(res=>{
        setSubmitSuccess(true)
        setMsg(res.data.message)
        setFailure(false)
        setTimeout(()=>{
          setSubmitSuccess(false)
          navigate('/admin')
        },2000)

      })
      .catch((error) =>{
        setSubmitSuccess(true)
        setMsg(error.response.data.message)
        console.log(success_msg)
        setFailure(true)
        setTimeout(()=>{setSubmitSuccess(false)},2000)
      })
     
    })

    const success_msg_class= failure?"login-error-msg":"success-msg"
    
    const checkLogo=failure?<BsFillXSquareFill/> :<BsFillCheckSquareFill/> 

  return (
    <div className='login-form-container'>
        <span className='login-form-title'>Admin Login</span>
        
        <FormProvider {...methods}>
          <form className='login-form' onSubmit={e => e.preventDefault()} noValidate>
          {submitSuccess && ( 
                <motion.p className={success_msg_class}
                key="loginMsg"
                exit={{ opacity: 0}}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                  {checkLogo}&nbsp;{success_msg}
                </motion.p>
              )}
              <InputComponent label="Username" type="text" id="username" name="username" placeholder='Enter Username' classNm='form-inputs' {...name_validation}/>
              <PasswordInputComponent label="Password" type="password" id="password" name="password" placeholder="Enter Password" classNm='psd-form-inputs' {...name_validation}/>
             
              <button  className='login-btn' onClick={submitInputs}>Login</button>
              
          </form>
        </FormProvider>
        <Link to='*/forgotpsd/*'>Forgot password?</Link>
    </div>
  )
}

export default LoginForm