import React,{useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import InputComponent from './InputComponent'
import { forgot_psd_validation} from './utils/inputValidations'
import { HashLink as Link} from 'react-router-hash-link'
import './ForgotPsd.css'

function ForgotPsd() {
    const [success,setSuccess]= useState(false)

    useEffect(()=>{
      document.title='Forgot Password'
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
      success?console.log("success"):console.log("not success")
    })


  return (
    <div className='login-form-container'>
        <span className='login-form-title'>Forgot Password</span>
        <FormProvider {...methods}>
          <form className='login-form' onSubmit={e => e.preventDefault()} noValidate>
              <InputComponent label="Insert Email or Username" type="email" id="email" name="email" placeholder='Enter your registered email or Username' classNm='form-inputs' {...forgot_psd_validation}/>
            
              <button  className='login-btn' onClick={submitInputs}>Submit</button>
              
          </form>
        </FormProvider>
        <Link to='/login'>Return to Login</Link>
        <Link to='../*/forgotpsdcode/*'>code</Link>

    </div>
  )
}

export default ForgotPsd