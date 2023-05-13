import React,{useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import InputComponent from './InputComponent'
import { email_validation} from './utils/inputValidations'
import { HashLink as Link} from 'react-router-hash-link'
import './ForgotPsd.css'

function ForgotPsd() {
    const [success,setSuccess]= useState(false)
    useEffect(()=>{
      document.title='Admin Login'
    },[])
  
    const methods= useForm({
      defaultValues:{
        services:'marketing'
      }
    })
  
    const {handleSubmit}=methods
  
    const submitInputs= handleSubmit((data)=>{
      console.log('inputs',data)
      setSuccess(true)
    })
  return (
    <div className='login-form-container'>
        <span className='login-form-title'>Forgot Password</span>
        <FormProvider {...methods}>
          <form className='login-form' onSubmit={e => e.preventDefault()} noValidate>
              <InputComponent label="Insert Email" type="email" id="email" name="email" placeholder='Enter your email' classNm='form-inputs' {...email_validation}/>
            
              <button  className='login-btn' onClick={submitInputs}>Submit</button>
              
          </form>
        </FormProvider>
        <Link to='/login'>Return to Login</Link>
    </div>
  )
}

export default ForgotPsd