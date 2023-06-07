import React,{useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import {DevTool} from '@hookform/devtools'
import './styles/HireForm.css'
import InputComponent from './InputComponent'
import TextInput from './TextInput'
import FixedHeader from './FixedHeader'
import RadioComponent from './RadioComponent'
import { email_validation, name_validation, phone_validation, text_validation } from './utils/inputValidations'
import {BsFillCheckSquareFill, BsFillXSquareFill} from 'react-icons/bs'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function HireForm() {

  const [submitSuccess,setSubmitSuccess]= useState(false)
  const [failure,setFailure]= useState(false)
  const [success_msg,setMsg] = useState('')
  const navigate = useNavigate();
  
  useEffect(()=>{
    document.title='Hire Us '
  },[])

  const methods= useForm({
    defaultValues:{
      services:'marketing'
    }
  })

  const { control,handleSubmit}=methods

  const submitInputs= handleSubmit((data)=>{
   
    axios.post('/hire/makeRequest',data)
    .then(res=>{
      console.log("res: ",res)
      setMsg(res.data)
      setSubmitSuccess(true)
      setFailure(false)

      setTimeout(()=>{
        setSubmitSuccess(false)
        navigate('/')},8000)
    })
    .catch(err=>{
      setMsg(err.response.data)
        setSubmitSuccess(true)
        setFailure(true)
    });
  })
  const success_msg_class= failure?"error-msg":"success-msg"
  const checkLogo=failure?<BsFillXSquareFill/>:<BsFillCheckSquareFill/> 
  return (
    <div className='hire-form-container'>
      <FixedHeader logo_link="/#home" services="/#services" about="/#abtUs" hireUs=""/>
      <div className='form-container' id="top">
        <FormProvider {...methods}>
          <form className='hire-form' onSubmit={e => e.preventDefault()} noValidate>
              <InputComponent label="First Name" type="text" id="first_name" name="first_name" placeholder='Enter First Name' classNm='form-inputs' {...name_validation}/>
              <InputComponent label="Last Name" type="text" id="last_name" name="last_name" placeholder='Enter Last Name' classNm='form-inputs' {...name_validation}/>
              <InputComponent  label="Email" type="Email" id="email" name="email" placeholder='Enter your email' classNm='form-inputs' {...email_validation}/>
              <InputComponent label="Company Name" type="text" id="comp_name" name="comp_name" placeholder='Enter Company Name' classNm='form-inputs' {...name_validation}/>
              <InputComponent label="Phone" type="text" id="phone" name="phone" placeholder='Enter Phone Number (+46762727223)' classNm='form-inputs' {...phone_validation}/>
              
              <label>
                Tell us how we could be of help
              </label>              
              <RadioComponent value="marketing" label="Marketing" name="services" />
              <RadioComponent value="accounting management" label="Accounting Management" name="services" />
              <RadioComponent value="content creation" label="Content Creation" name="services"/>
              <RadioComponent value="other" label="Other" name="services"/>
              
              <TextInput textLabel="Specify" name="specify"  placeholder='Specify your choice above' {...text_validation}/>
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
              <button  className='form-btn' onClick={submitInputs}>Submit</button>
              
          </form>
        </FormProvider>
       
        <DevTool control={control}/>
      </div>
        
    </div>
  )
}

export default HireForm