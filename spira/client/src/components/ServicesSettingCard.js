import React,{useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import TextInput from './TextInput'
import { text_validation } from './utils/inputValidations'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import './styles/ServicesSettingCard.css'

function ServicesSettingCard({service_id,service_name, service_description}) {

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
        service_name:service_name,
        service_description:service_description,
      }
    })
    
    const {handleSubmit}=methods
  
    const submitInputs= handleSubmit((data)=>{
      const newData={...data,service_id}
      console.log('inputs',newData)
      setSuccess(true)
      setEditor(true)
      setDisabled(true)
      setTimeout(()=>{setSuccess(false)},2000)
    })

  return (
    <div className='service-setting-card'>
        <FormProvider {...methods}>
          <form className='service-setting-form' onSubmit={e => e.preventDefault()} noValidate>
            <div className='service-setting-inputs'>
                <InputComponent label="Service Name" type="text" id="service_name" name="service_name" placeholder='Enter service name...' classNm='form-inputs' disabled={disabledTxt} {...text_validation}/>
                <TextInput textLabel="Service Description" name="service_description"  placeholder='Enter service description' disabled={disabledTxt} {...text_validation}/>
            </div>
            <div className='service-setting-controls'>
                {success && (
                    <motion.p className="service-success-msg"
                        initial= {{ opacity: 0, y: 10 }}
                        animate= {{ opacity: 1, y: 0 }}
                        exit= {{ opacity: 0, y: 10 }}
                        transition= {{ duration: 0.5 , ease: 'easeInOut'}}>
                    <BsFillCheckSquareFill /> Service updated successfully
                    </motion.p>
                )}

                {
                editor && (
                    <button  className='service-setting-edit-btn' onClick={enableForm}>Edit</button>
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

export default ServicesSettingCard