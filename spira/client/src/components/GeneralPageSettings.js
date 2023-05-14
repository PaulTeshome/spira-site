import React,{useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import {DevTool} from '@hookform/devtools'
import InputComponent from './InputComponent'
import TextInput from './TextInput'
import { email_validation, name_validation, phone_validation, text_validation } from './utils/inputValidations'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import './GeneralPageSettings.css'

function GeneralPageSettings() {

    const [success,setSuccess]= useState(false)
    const [disabled,setDisabled]= useState(true)
    const [editor,setEditor]= useState(true)

    const disabledTxt = disabled?"disabled":""

    const enableForm= ()=>{
        setDisabled(!disabled)
        setEditor(false)
    }
    useEffect(()=>{
      document.title='Hire Us '
    },[])
  
    const methods= useForm({
      defaultValues:{
        fname:'marketing'
      }
    })
  
    const { control,handleSubmit}=methods
  
    const submitInputs= handleSubmit((data)=>{
      console.log('inputs',data)
      setSuccess(true)
      setEditor(true)
      setDisabled(true)
    })

  return (
    
    <div className='general-settings-container' >
        <span className='general-settings-title'> General Page Elements Edit Form</span>
        <FormProvider {...methods}>
          <form className='general-settings-form' onSubmit={e => e.preventDefault()} noValidate>
              <InputComponent label="First Name" type="text" id="fname" name="fname" placeholder='Enter First Name' classNm='form-inputs' disabled={disabledTxt} {...name_validation}/>
              <InputComponent label="Last Name" type="text" id="lname" name="lname" placeholder='Enter Last Name' classNm='form-inputs' disabled={disabledTxt} {...name_validation}/>
              <InputComponent  label="Email" type="Email" id="email" name="email" placeholder='Enter your email' classNm='form-inputs' disabled={disabledTxt} {...email_validation}/>
              <InputComponent label="Company Name" type="text" id="cname" name="cname" placeholder='Enter Company Name' classNm='form-inputs' disabled={disabledTxt} {...name_validation}/>
              <InputComponent label="Phone" type="text" id="phone" name="phone" placeholder='Enter Phone Number (+46762727223)' classNm='form-inputs' disabled={disabledTxt} {...phone_validation}/>
                    
              <TextInput textLabel="Specify" name="spec"  placeholder='Specify your choice above' disabled={disabledTxt} {...text_validation}/>
              {success && (
                <motion.p className="success-msg"
                  initial= {{ opacity: 0, y: 10 }}
                  animate= {{ opacity: 1, y: 0 }}
                  exit= {{ opacity: 0, y: 10 }}
                  transition= {{ duration: 0.5 }}>
                  <BsFillCheckSquareFill /> Form has been submitted successfully
                </motion.p>
              )}

                {
                editor && (
                    <button  className='general-settings-edit-btn' onClick={enableForm}>Edit</button>
                )}

                {
                !editor && (
                    <button  className='general-settings-save-btn' onClick={submitInputs}>Save</button>
                )
                }
             
          </form>
        </FormProvider>
       
        <DevTool control={control}/>
    </div>
    
  )
}

export default GeneralPageSettings