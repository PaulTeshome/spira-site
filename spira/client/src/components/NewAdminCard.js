import React,{ useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import { email_validation, name_validation } from './utils/inputValidations'
import {BsFillCheckSquareFill, BsFillXSquareFill} from 'react-icons/bs'
import './styles/ServicesSettingCard.css'
import axios from 'axios'
import PasswordInputComponent from './PasswordInputComponent'


function NewAdminCard({onClose, userId}) {

    
    const [successMsg,setSuccessMsg]= useState(false)
    const [errorMsg,setErrorMsg]= useState(false)
    const [errorData,setErrorData]= useState(" ")

    const methods= useForm()
    
    const {handleSubmit,getValues}=methods
  
    const submitInputs= handleSubmit((data)=>{
        
        const newData={...data, added_by: userId}
        console.log("new data: " + JSON.stringify(newData))
        axios.post("/admin/addAdmin", newData)
        .then(res => {
            setSuccessMsg(true)
            setTimeout(()=>{
                          setSuccessMsg(false)
                          onClose();
                      },2000)
            
        })
        .catch(error => {
          setErrorMsg(true)
          setErrorData(error.response.data.message)
          setTimeout(()=>{
            setErrorMsg(false)
            },5000)
        });
  
    })

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
            const { admin_password,confirm_password } = getValues();
            return admin_password === confirm_password || "Passwords should match!";
          },
      }
      
    }

  return (
    <div className='service-setting-card'>
        <FormProvider {...methods}>
          <form className='service-setting-form' onSubmit={e => e.preventDefault()} noValidate>
            <div className='service-setting-inputs'>
                <br/>
                <InputComponent label="New Admin Name" type="text" id="admin_username" name="admin_username" placeholder='Enter admin username' classNm='form-inputs'  {...name_validation}/>
                <InputComponent label="New Admin Email" type="text" id="admin_email" name="admin_email" placeholder='Enter admin email' classNm='form-inputs' {...email_validation}/>
                <PasswordInputComponent label="New Admin Password" type="password" id="admin_password" name="admin_password" placeholder="Enter Password" classNm='psd-form-inputs' {...conf_password_validation}/>
                <PasswordInputComponent label="Confirm Password" type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password" classNm='psd-form-inputs' {...conf_password_validation}/>
                <br/>
            </div>

            <div className='service-setting-controls'>
                {successMsg && (
                    <motion.p className="service-success-msg"
                        initial= {{ opacity: 0, y: 10 }}
                        animate= {{ opacity: 1, y: 0 }}
                        exit= {{ opacity: 0, y: 10 }}
                        transition= {{ duration: 0.5 , ease: 'easeInOut'}}>
                    <BsFillCheckSquareFill /> New Admin added successfully
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

               
                    <button  className='service-setting-edit-btn' onClick={submitInputs}>Add New Admin</button>
                    <button  className='service-setting-save-btn' onClick={onClose}>Cancel</button>
                
            </div>
          </form>
        </FormProvider>
    </div>
  )
}

export default NewAdminCard