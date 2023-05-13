import React,{useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import InputComponent from './InputComponent'
import { forgot_psd_validation} from './utils/inputValidations'
import { HashLink as Link} from 'react-router-hash-link'
import { motion } from 'framer-motion'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import './ForgotPsd.css'

function ForgotPsd() {
    const [submitSuccess,setSubmitSuccess]= useState(false)
    const [failure,setFailure]= useState(false)

    useEffect(()=>{
      document.title='Forgot Password'
    },[])
  
    const methods= useForm()
  
    const {handleSubmit}=methods
  
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
        <span className='login-form-title'>Forgot Password</span>
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
              <InputComponent label="Insert Email or Username" type="text" id="usrData" name="usrData" placeholder='Enter your registered email or Username' classNm='form-inputs' {...forgot_psd_validation}/>
            
              <button  className='login-btn' onClick={submitInputs}>Submit</button>
              
          </form>
        </FormProvider>
        <Link to='/login'>Return to Login</Link>
        <Link to='../*/forgotpsdcode/*'>code</Link>

    </div>
  )
}

export default ForgotPsd