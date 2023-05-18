import React,{useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import PasswordInputComponent from './PasswordInputComponent'
import { name_validation} from './utils/inputValidations'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import { HashLink as Link} from 'react-router-hash-link'
import './styles/LoginForm.css'

function LoginForm() {
    const [submitSuccess,setSubmitSuccess]= useState(false)
    const [failure,setFailure]= useState(false)
    
    useEffect(()=>{
      document.title='Admin Login'
    },[])
  
    const methods= useForm()
  
    const {handleSubmit}=methods
  
    const submitInputs= handleSubmit((data)=>{
      console.log('inputs',data)
      setSubmitSuccess(true)
      setFailure(false)
    })

    const success_msg_class= failure?"login-error-msg":"success-msg"
    const success_msg= failure?"Incorrect Username or Password!":"Login sucessfull redirecting..."
    const checkLogo=failure?"":<BsFillCheckSquareFill/> 

  return (
    <div className='login-form-container'>
        <span className='login-form-title'>Admin Login</span>
        
        <FormProvider {...methods}>
          <form className='login-form' onSubmit={e => e.preventDefault()} noValidate>
          {submitSuccess && (
                <motion.p className={success_msg_class}
                  initial= {{ opacity: 0, y: 10 }}
                  animate= {{ opacity: 1, y: 0 }}
                  exit= {{ opacity: 0, y: 10 }}
                  transition= {{ duration: 0.5 }}
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