import React,{useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { HashLink as Link} from 'react-router-hash-link'
import { motion } from 'framer-motion'
import { BsFillCheckSquareFill, BsFillXSquareFill } from 'react-icons/bs'
import './styles/UpdatePassword.css'
import PasswordInputComponent from './PasswordInputComponent'
import { DevTool } from '@hookform/devtools'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

function UpdatePassword() {

    const [submitSuccess,setSubmitSuccess]= useState(false)
    const [failure,setFailure]= useState(false)
    const [success_msg,setMsg] = useState('')

    const [token, setToken] = useState(null);

    const navigate= useNavigate()

    
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get('token');
    if (tokenParam) {
      setToken(tokenParam);
    }
  }, []);

    useEffect(()=>{
      document.title='Update Password'
    },[])
  
    const methods= useForm()
  
    const {getValues, control,handleSubmit}=methods
  
    const submitInputs= handleSubmit((data)=>{
      console.log('inputs',data)
      
      axios.post('/reset-password/submit',{token: token, password: data.update_password})
      .then(res=>{
        setMsg(res.data)
        setSubmitSuccess(true)
        setFailure(false)

        setTimeout(()=>{
          setSubmitSuccess(false)
          navigate('/login')},2000)
      })
      .catch(err=>{
        setMsg(err.response.data)
        setSubmitSuccess(true)
        setFailure(true)
        setTimeout(()=>{
          setSubmitSuccess(false)
          navigate('/login/*/forgotpsd')},2000)
      });
    })

    const success_msg_class= failure?"login-error-msg":"success-msg"
    const checkLogo=failure?<BsFillXSquareFill/>:<BsFillCheckSquareFill/> 

    const conf_password_validation = {
        validation: {
          required: {
              value: true,
              message: 'required',
          },
          minLength: {
              value: 6,
              message: 'minimum 6 characters',
          },
          maxLength: {
              value: 30,
              message: 'maximum 30 characters',
          },
          pattern: {
              value:  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
              message: 'include Uppercase, Lowercase, digit and special character',
          },

          validate: (value) => {
            const { update_password,confirm_password } = getValues();
            return update_password === confirm_password || "Passwords should match!";
          },
      }
      
    }

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

          <PasswordInputComponent label="New Password" type="password" id="update_password" name="update_password" placeholder="Enter Password" classNm='psd-form-inputs' {...conf_password_validation}/>
          <PasswordInputComponent label="Confirm Password" type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password" classNm='psd-form-inputs' {...conf_password_validation}/>
       
          <button  className='login-btn' onClick={submitInputs}>Update</button>
          
      </form>
    </FormProvider>
    <Link to='/login'>Return to Login</Link>
    <DevTool control={control}/>
</div>
  )
}

export default UpdatePassword