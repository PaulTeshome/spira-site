import React,{useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import TextInput from './TextInput'
import { name_validation, text_validation } from './utils/inputValidations'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import './styles/ServicesSettingCard.css'

function TestimonailSettingListCard({testimonial_id,testimonial_owner, testimonial_text}) {

    const [successMsg,setSuccessMsg]= useState(false)
    const [disabled,setDisabled]= useState(true)
    const [editor,setEditor]= useState(true)

    const disabledTxt = disabled?"disabled":""

    const enableForm= ()=>{
        setDisabled(!disabled)
        setEditor(false)
    }

    const deleteForm= ()=>{
      let confDel= window.confirm("Are you sure you want to delete project data?")

      if (confDel){
        alert("Delete")
      }else{
        alert("no delete")
      }
  }

    useEffect(()=>{
      document.title='Admin Dashboard'
      
    },[])
  
    const methods= useForm({
      defaultValues:{
        testimonial_owner:testimonial_owner,
        testimonial_text:testimonial_text,
      }
    })
    
    const {handleSubmit}=methods
  
    const submitInputs= handleSubmit((data)=>{
      const newData={...data,testimonial_id}
      console.log('inputs',newData)
      setSuccessMsg(true)
      setEditor(true)
      setDisabled(true)
      setTimeout(()=>{setSuccessMsg(false)},2000)
    })

  return (
    <div className='service-setting-card'>
        <FormProvider {...methods}>
          <form className='service-setting-form' onSubmit={e => e.preventDefault()} noValidate>
            <div className='service-setting-inputs'>
                <InputComponent label="Testimonial Owner" type="text" id="testimonial_owner" name="testimonial_owner" placeholder='Enter testimonial owner...' classNm='form-inputs' disabled={disabledTxt} {...name_validation}/>
                <TextInput textLabel="Testimonial Text" name="testimonial_text"  placeholder='Enter testimonial' disabled={disabledTxt} {...text_validation}/>
            </div>
            <div className='service-setting-controls'>
                {successMsg && (
                    <motion.p className="service-success-msg"
                        initial= {{ opacity: 0, y: 10 }}
                        animate= {{ opacity: 1, y: 0 }}
                        exit= {{ opacity: 0, y: 10 }}
                        transition= {{ duration: 0.5 , ease: 'easeInOut'}}>
                    <BsFillCheckSquareFill /> Testimonial updated successfully
                    </motion.p>
                )}

                {
                editor && (
                    <button  className='service-setting-edit-btn' onClick={enableForm}>Edit</button>
                )}

                {
                editor && (
                    <button  className='service-setting-save-btn' onClick={deleteForm}>Delete</button>
                )}

                {
                !editor && (
                    <button  className='service-setting-save-btn' onClick={submitInputs}>Save</button>
                )
                }
            </div>
          </form>
        </FormProvider>
    </div>
  )
}

export default TestimonailSettingListCard