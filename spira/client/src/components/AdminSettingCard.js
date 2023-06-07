import React,{useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import { text_validation } from './utils/inputValidations'
import {BsFillCheckSquareFill, BsFillXSquareFill} from 'react-icons/bs'
import './styles/ServicesSettingCard.css'
import axios from 'axios' 

function AdminSettingCard({admin_id,admin_username,update}) {

    const [deleteMsg,setDeleteMsg]= useState(false)
    const [errorMsg,setErrorMsg]= useState(false)
    const [errorData,setErrorData]= useState(" ")

    const methods= useForm({
        defaultValues:{
          admin_username:admin_username,
          
        }
      })
      
      const {handleSubmit}=methods
  
  
  
      const deleteForm= handleSubmit((data)=>{
        let confDel= window.confirm(`Are you sure you want to delete ${admin_username}?`)
  
        if (confDel){
          axios.delete("/admin/deleteAdmin", { data: { admin_id: admin_id }})
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
              update()
              },3000)
          });
        }else{
            update()
        }
      })
  
   
  return (
    <div className='service-setting-card'>
        <FormProvider {...methods}>
          <form className='service-setting-form' onSubmit={e => e.preventDefault()} noValidate>
            <div className='service-setting-inputs'>
                <InputComponent label="Admin Account" type="text" id="admin_username" name="admin_username" placeholder='Enter service name...' classNm='form-inputs' disabled="disabled" {...text_validation}/>
            </div>
            <div className='service-setting-controls'>
             

                {deleteMsg && (
                    <motion.p className="service-success-msg"
                        initial= {{ opacity: 0, y: 10 }}
                        animate= {{ opacity: 1, y: 0 }}
                        exit= {{ opacity: 0, y: 10 }}
                        transition= {{ duration: 0.5 , ease: 'easeInOut'}}>
                    <BsFillCheckSquareFill /> Admin Account deleted successfully
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
                <button  className='service-setting-save-btn' onClick={deleteForm}>Delete</button>
            </div>
          </form>
        </FormProvider>
    </div>
  )
}

export default AdminSettingCard