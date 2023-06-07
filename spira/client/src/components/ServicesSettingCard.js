import React,{useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import TextInput from './TextInput'
import { text_validation } from './utils/inputValidations'
import {BsFillCheckSquareFill, BsFillXSquareFill} from 'react-icons/bs'
import './styles/ServicesSettingCard.css'
import axios from 'axios' 

function ServicesSettingCard({service_id,service_name, service_description, update}) {

    const [successMsg,setSuccessMsg]= useState(false)
    const [deleteMsg,setDeleteMsg]= useState(false)
    const [errorMsg,setErrorMsg]= useState(false)
    const [errorData,setErrorData]= useState(" ")
    const [disabled,setDisabled]= useState(true)
    const [editor,setEditor]= useState(true)

    const methods= useForm({
      defaultValues:{
        service_name:service_name,
        service_description:service_description,
      }
    })
    
    const {handleSubmit}=methods

    const disabledTxt = disabled?"disabled":""

    const enableForm= ()=>{
        setDisabled(!disabled)
        setEditor(false)
    }

    const deleteForm= handleSubmit((data)=>{
      let confDel= window.confirm(`Are you sure you want to delete ${service_name}?`)

      if (confDel){
        axios.delete("/services/deleteService", { data: { service_id: service_id }})
        .then(res => {
          setDeleteMsg(true)
          setTimeout(()=>{
            setDeleteMsg(false)
            update()
          },2000)
          
        })
        .catch(error => {
          console.error('Error deleting value:', error);
          const errorMessage = error.response ? error.response.data.error : 'Failed to delete value. Please Try again.';
          setErrorMsg(true)
          setErrorData(errorMessage)
          setTimeout(()=>{
            setErrorMsg(false)
            setEditor(true)
            setDisabled(true)
            update()
            },3000)
        });
      }else{
        setEditor(true)
        setDisabled(true)
        
      }
    })

  
    const submitInputs= handleSubmit((data)=>{
      const newData={...data,service_id}
      axios.put("/services/updateService", newData)
        .then(res => {
          setSuccessMsg(true)
          setEditor(true)
          setDisabled(true)
          setTimeout(()=>{
            setSuccessMsg(false)
            update()
          },2000)
        })
        .catch(error => {
          console.error('Error updating value:', error);
          const errorMessage = error.response ? error.response.data.error : 'Failed to update value. Please Try again.';
          setErrorMsg(true)
          setErrorData(errorMessage)
          setTimeout(()=>{
            setErrorMsg(false)
            setEditor(true)
            setDisabled(true)
            update()
            },3000)
        });
      
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
                {successMsg && (
                    <motion.p className="service-success-msg"
                        initial= {{ opacity: 0, y: 10 }}
                        animate= {{ opacity: 1, y: 0 }}
                        exit= {{ opacity: 0, y: 10 }}
                        transition= {{ duration: 0.5 , ease: 'easeInOut'}}>
                    <BsFillCheckSquareFill /> Service updated successfully
                    </motion.p>
                )}

                {deleteMsg && (
                    <motion.p className="service-success-msg"
                        initial= {{ opacity: 0, y: 10 }}
                        animate= {{ opacity: 1, y: 0 }}
                        exit= {{ opacity: 0, y: 10 }}
                        transition= {{ duration: 0.5 , ease: 'easeInOut'}}>
                    <BsFillCheckSquareFill /> Service deleted successfully
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

export default ServicesSettingCard