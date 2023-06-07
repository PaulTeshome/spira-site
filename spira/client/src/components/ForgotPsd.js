import React,{useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import InputComponent from './InputComponent'
import { email_validation} from './utils/inputValidations'
import { HashLink as Link} from 'react-router-hash-link'
import { motion } from 'framer-motion'
import { BsFillCheckSquareFill, BsFillXSquareFill } from 'react-icons/bs'
import './styles/ForgotPsd.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ForgotPsd() {
    const [submitSuccess,setSubmitSuccess]= useState(false)
    const [failure,setFailure]= useState(false)
    const [success_msg,setMsg] = useState('')

    useEffect(()=>{
      document.title='Forgot Password'
    },[])
  
    const methods= useForm()
  
    const {handleSubmit}=methods

    const navigate= useNavigate()
  
    const submitInputs= handleSubmit((data)=>{
      console.log('inputs',data)

      axios.post('/reset-password/reset',{email: data.admin_email})
      .then(res=>{
        setMsg(res.data.message)
        setSubmitSuccess(true)
        setFailure(false)

        setTimeout(()=>{
          setSubmitSuccess(false)
          navigate('/login')},5000)
      })
      .catch(err=>{
        setMsg(err.response.data.message)
        setSubmitSuccess(true)
        setFailure(true)
        setTimeout(()=>{
          setSubmitSuccess(false)
          navigate('/login')},5000)
      });
     
    })

    const success_msg_class= failure?"login-error-msg":"success-msg"
    const checkLogo=failure?<BsFillXSquareFill/>:<BsFillCheckSquareFill/> 

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
              <InputComponent label="Insert Email" type="text" id="admin_email" name="admin_email" placeholder='Enter your registered email' classNm='form-inputs' {...email_validation}/>
            
              <button  className='login-btn' onClick={submitInputs}>Submit</button>
              
          </form>
        </FormProvider>
        <Link to='/login'>Return to Login</Link>
        {/* <Link to='../*]/forgotpsdcode/*'>code</Link> */}

    </div>
  )
}

export default ForgotPsd