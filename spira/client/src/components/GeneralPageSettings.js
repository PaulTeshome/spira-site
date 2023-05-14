import React,{useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import TextInput from './TextInput'
import { email_validation,  phone_validation, optional_settings_validation, text_validation } from './utils/inputValidations'
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
      document.title='Admin Dashboard'
    },[])
  
    const methods= useForm({
      defaultValues:{
        motto:'EMPOWERING YOUR BRAND IN THE DIGITAL SPACE'
      }
    })
  
    const {handleSubmit}=methods
  
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
              <InputComponent label="Company Motto" type="text" id="motto" name="motto" placeholder='Enter company motto...' classNm='form-inputs' disabled={disabledTxt} {...text_validation}/>
              <TextInput textLabel="Company Mission" name="comp_mission"  placeholder='Enter company mission' disabled={disabledTxt} {...text_validation}/>
              <TextInput textLabel="Company 'About Us'" name="comp_abt"  placeholder='Enter about us description...' disabled={disabledTxt} {...text_validation}/>
              <InputComponent  label="Company Email" type="email" id="comp_email" name="comp_email" placeholder='Enter company email...' classNm='form-inputs' disabled={disabledTxt} {...email_validation}/>
              <InputComponent label="Company Phone 1" type="text" id="comp_phone1" name="comp_phone1" placeholder='Enter company phone number (+46762727223)' classNm='form-inputs' disabled={disabledTxt} {...phone_validation}/>
              <InputComponent label="Company Phone 2" type="text" id="comp_phone2" name="comp_phone2" placeholder='Enter company phone number (+46731443749)' classNm='form-inputs' disabled={disabledTxt} {...phone_validation}/>
              <InputComponent label="Company Location" type="text" id="comp_location" name="comp_location" placeholder='Enter company location...' classNm='form-inputs' disabled={disabledTxt} {...text_validation}/>
              <InputComponent label="Instagram Link" type="text" id="comp_insta" name="comp_insta" placeholder='Enter company instagram account link...' classNm='form-inputs' disabled={disabledTxt} {...text_validation}/>
              <InputComponent label="Other Social Media" type="text" id="comp_social" name="comp_social" placeholder='Enter other social media link (optional)...' classNm='form-inputs' disabled={disabledTxt} {...optional_settings_validation}/>
              
                    
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
    </div>
    
  )
}

export default GeneralPageSettings