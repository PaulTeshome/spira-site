import React,{useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import TextInput from './TextInput'
import { email_validation,  phone_validation, optional_settings_validation, text_validation } from './utils/inputValidations'
import {BsFillCheckSquareFill, BsFillXSquareFill} from 'react-icons/bs'
import './styles/GeneralPageSettings.css'
import axios from 'axios'

function GeneralPageSettings() {

    const [successMsg,setSuccessMsg]= useState(false)
    const [errorMsg,setErrorMsg]= useState(false)
    const [errorData,setErrorData]= useState(" ")
    const [disabled,setDisabled]= useState(true)
    const [editor,setEditor]= useState(true)
    const [pageElements,setPageElements]= useState({})
    

    const methods= useForm()

    const {handleSubmit,reset}=methods

    useEffect(()=>{
      document.title='Admin Dashboard'

      axios.get("/general/getAll")
      .then(res => {
        setPageElements(res.data[0])
      })

      .catch(error => {
        console.log(error);
      });
    },[])

    useEffect(() => {
      if (pageElements) {
        reset(pageElements)
      }
    }, [pageElements, reset])
    
    

    const disabledTxt = disabled?"disabled":""

    const enableForm= ()=>{
        setDisabled(!disabled)
        setEditor(false)
    }
    
  
    
  
    const submitInputs= handleSubmit((data)=>{
      
      axios.put("/general/updateAll", data)
      .then(res => {
        setSuccessMsg(true)
        setEditor(true)
        setDisabled(true)
        setTimeout(()=>{setSuccessMsg(false)},4000)

      })
      .catch(error => {
        console.error('Error updating value:', error);
        const errorMessage = error.response ? error.response.data.error : 'Failed to update value. Please Try again.';
        setErrorMsg(true)
        setErrorData(errorMessage)
        setEditor(true)
        setDisabled(true)
        setTimeout(()=>{setErrorMsg(false)},10000)
      });

    
    })

  return (
    
    <div className='general-settings-container' >
        <span className='general-settings-title'> General Page Elements Edit Form</span>
       
        <FormProvider {...methods}>
          <form className='general-settings-form' onSubmit={e => e.preventDefault()} noValidate>
              <InputComponent label="Company Motto" type="text" id="comp_motto" name="comp_motto" placeholder='Enter company motto...' classNm='form-inputs'  disabled={disabledTxt} {...text_validation}/>
              <TextInput textLabel="Company Mission" name="comp_mission"  placeholder='Enter company mission' disabled={disabledTxt} {...text_validation}/>
              <TextInput textLabel="Company 'About Us'" name="comp_abt"  placeholder='Enter about us description...'  disabled={disabledTxt} {...text_validation}/>
              <InputComponent  label="Company Email" type="email" id="comp_email" name="comp_email" placeholder='Enter company email...' classNm='form-inputs' disabled={disabledTxt} {...email_validation}/>
              <InputComponent  label="Recipient Email (for recieving hire requests)" type="email" id="recipient_email" name="recipient_email" placeholder='Enter recipient email...' classNm='form-inputs' disabled={disabledTxt} {...email_validation}/>
              <InputComponent label="Company Phone 1" type="text" id="comp_phone1" name="comp_phone1" placeholder='Enter company phone number (+46762727223)' classNm='form-inputs'  disabled={disabledTxt} {...phone_validation}/>
              <InputComponent label="Company Phone 2" type="text" id="comp_phone2" name="comp_phone2" placeholder='Enter company phone number (+46731443749)' classNm='form-inputs' disabled={disabledTxt} {...phone_validation}/>
              <InputComponent label="Company Location" type="text" id="comp_location" name="comp_location" placeholder='Enter company location...' classNm='form-inputs' disabled={disabledTxt} {...text_validation}/>
              <InputComponent label="Instagram Link" type="text" id="insta_link" name="insta_link" placeholder='Enter company instagram account link(use https:// format)...' classNm='form-inputs'  disabled={disabledTxt} {...text_validation}/>
              <InputComponent label="Other Social Media" type="text" id="other_socials" name="other_socials" placeholder='Enter other social media link (optional, use https:// format)...' classNm='form-inputs' disabled={disabledTxt} {...optional_settings_validation}/>
              
                    
              {successMsg && (
                <motion.p className="success-msg"
                  initial= {{ opacity: 0, y: 10 }}
                  animate= {{ opacity: 1, y: 0 }}
                  exit= {{ opacity: 0, y: 10 }}
                  transition= {{ duration: 0.5 }}>
                  <BsFillCheckSquareFill /> Form has been submitted successfully
                </motion.p>
              )}

              {errorMsg && (
                <motion.p className="error-msg"
                  initial= {{ opacity: 0, y: 10 }}
                  animate= {{ opacity: 1, y: 0 }}
                  exit= {{ opacity: 0, y: 10 }}
                  transition= {{ duration: 0.5 }}>
                  <BsFillXSquareFill /> {errorData}
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