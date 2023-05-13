import React,{useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import {  password_validation} from './utils/inputValidations'
import { HashLink as Link} from 'react-router-hash-link'
import { motion } from 'framer-motion'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import './UpdatePassword.css'
import PasswordInputComponent from './PasswordInputComponent'
import { DevTool } from '@hookform/devtools'

function UpdatePassword() {

    const [submitSuccess,setSubmitSuccess]= useState(false)
    const [failure,setFailure]= useState(false)

    useEffect(()=>{
      document.title='Update Password'
    },[])
  
    const methods= useForm()
  
    const {control,handleSubmit}=methods
  
    const submitInputs= handleSubmit((data)=>{
      console.log('inputs',data)
      setSubmitSuccess(true)
      setFailure(false)
    })

    const success_msg_class= failure?"login-error-msg":"success-msg"
    const success_msg= failure?"No such username or email is registered!":"Successful redirecting..."
    const checkLogo=failure?"":<BsFillCheckSquareFill/> 

  return (
    <div className='login-form-container'>
    <span className='login-form-title'>Update Password</span>
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
          
          <PasswordInputComponent label="New Password" type="password" id="password" name="password" placeholder="Enter Password" classNm='psd-form-inputs' {...password_validation}/>
          <PasswordInputComponent label="Confirm Password" type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password" classNm='psd-form-inputs' {...password_validation}/>
       
          <button  className='login-btn' onClick={submitInputs}>Update</button>
          
      </form>
    </FormProvider>
    <Link to='/login'>Return to Login</Link>
    <DevTool control={control}/>
</div>
  )
}

export default UpdatePassword