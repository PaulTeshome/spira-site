import React,{useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import { name_validation} from './utils/inputValidations'
import {BsFillCheckSquareFill, BsFillXSquareFill} from 'react-icons/bs'
import './styles/ServicesSettingCard.css'
import axios from 'axios'
import PasswordInputComponent from './PasswordInputComponent'

function OwnAdminSettingCard({admin_id, admin_username}) {

    const [successMsg,setSuccessMsg]= useState(false)
    const [errorMsg,setErrorMsg]= useState(false)
    const [errorData,setErrorData]= useState(" ")
    const [disabled,setDisabled]= useState(true)
    const [editor,setEditor]= useState(true)
    const [psdEditor,setPsdEditor]= useState(true)


    const methods= useForm({
        defaultValues:{
            admin_username:admin_username
        }
      })

      const {getValues, handleSubmit}=methods

      const disabledTxt = disabled?"disabled":""
  
      
    const enableForm= ()=>{
        setDisabled(!disabled)
        setEditor(false)
    }

    const enablePsd= ()=>{
        setDisabled(!disabled)
        setPsdEditor(false)
    }

    const cancelPsd= ()=>{
        setDisabled(!disabled)
        setPsdEditor(true)
    }

    const submitInputs= handleSubmit((data)=>{
        const newData={...data,admin_id}

        console.log("new data: " + newData);
        axios.put("/admin/updateAdmin", newData)
          .then(res => {
            setSuccessMsg(true)
            setEditor(true)
            setDisabled(true)
            setTimeout(()=>{
              setSuccessMsg(false)
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
              },3000)
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
            const { update_password,confirm_password } = getValues();
            return update_password === confirm_password || "Passwords should match!";
          },
      }
      
    }
    
  return (
<div className='service-setting-card'>
        <FormProvider {...methods}>
          <form className='service-setting-form' onSubmit={e => e.preventDefault()} noValidate>
            <div className='service-setting-inputs'>
                <InputComponent label="Admin Userame" type="text" id="admin_username" name="admin_username" placeholder='Enter service name...' classNm='form-inputs' disabled={disabledTxt} {...name_validation}/>
               
                {
                    psdEditor ? (
                        <button  className='service-password-edit-btn' onClick={enablePsd}>Edit Password</button>
                    ):
                    (
                    <>
                        <PasswordInputComponent label="Old Password" type="password" id="old_password" name="old_password" placeholder="Enter Old Password" classNm='psd-form-inputs' disabled={disabledTxt} {...conf_password_validation}/>
                        <PasswordInputComponent label="New Password" type="password" id="update_password" name="update_password" placeholder="Enter Password" classNm='psd-form-inputs' disabled={disabledTxt} {...conf_password_validation}/>
                        <PasswordInputComponent label="Confirm Password" type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password" classNm='psd-form-inputs' disabled={disabledTxt} {...conf_password_validation}/>
                        <button  className='service-password-edit-btn' onClick={cancelPsd}>Cancel Edit Password</button>
                    </>
                    )
                }
                </div>
            <div className='service-setting-controls'>
                {successMsg && (
                    <motion.p className="service-success-msg"
                        initial= {{ opacity: 0, y: 10 }}
                        animate= {{ opacity: 1, y: 0 }}
                        exit= {{ opacity: 0, y: 10 }}
                        transition= {{ duration: 0.5 , ease: 'easeInOut'}}>
                    <BsFillCheckSquareFill /> Admin updated successfully
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

export default OwnAdminSettingCard