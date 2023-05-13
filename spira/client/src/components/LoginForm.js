import React,{useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import PasswordInputComponent from './PasswordInputComponent'
import { name_validation} from './utils/inputValidations'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import { HashLink as Link} from 'react-router-hash-link'
import './LoginForm.css'

function LoginForm() {
    const [success,setSuccess]= useState(false)
    useEffect(()=>{
      document.title='Admin Login'
    },[])
  
    const methods= useForm()
  
    const {handleSubmit}=methods
  
    const submitInputs= handleSubmit((data)=>{
      console.log('inputs',data)
      setSuccess(true)
    })
  return (
    <div className='login-form-container'>
        <span className='login-form-title'>Admin Login</span>
        <FormProvider {...methods}>
          <form className='login-form' onSubmit={e => e.preventDefault()} noValidate>
              <InputComponent label="Username" type="text" id="usrname" name="usrname" placeholder='Enter Username' classNm='form-inputs' {...name_validation}/>
              <PasswordInputComponent label="Password" type="password" id="password" name="password" placeholder="Enter Password" classNm='psd-form-inputs' {...name_validation}/>
              {success && (
                <motion.p className="success-msg"
                  initial= {{ opacity: 0, y: 10 }}
                  animate= {{ opacity: 1, y: 0 }}
                  exit= {{ opacity: 0, y: 10 }}
                  transition= {{ duration: 0.5 }}
                >
                  <BsFillCheckSquareFill /> Form has been submitted successfully
                </motion.p>
              )}
              <button  className='login-btn' onClick={submitInputs}>Login</button>
              
          </form>
        </FormProvider>
        <Link to='*/forgotpsd/*'>Forgot password?</Link>
    </div>
  )
}

export default LoginForm