import React,{useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import { email_validation, name_validation} from './utils/inputValidations'
import {BsFillCheckSquareFill, BsFillXSquareFill} from 'react-icons/bs'
import './styles/ServicesSettingCard.css'
import axios from 'axios'
import PasswordInputComponent from './PasswordInputComponent'
import { useNavigate } from 'react-router-dom'

function OwnAdminSettingCard({admin_id, admin_email,admin_username}) {


    const [successMsg,setSuccessMsg]= useState(false)
    const [errorMsg,setErrorMsg]= useState(false)
    const [errorData,setErrorData]= useState(" ")
    const [disabled,setDisabled]= useState(true)
    const [usrEditor,setUsrEditor]= useState(true)
    const [psdEditor,setPsdEditor]= useState(true)
    const navigate= useNavigate();


    const methods= useForm({
        defaultValues:{
            admin_username: admin_username,
            admin_email: admin_email,
        }
      })

      const {getValues, handleSubmit}=methods

      const disabledTxt = disabled?"disabled":""
  
      
    const enableUsername= ()=>{
        setDisabled(!disabled)
        setPsdEditor(true)
        setUsrEditor(false)
    }

    const enablePsd= ()=>{
        setDisabled(!disabled)
        setUsrEditor(false)
        setPsdEditor(false)
    }

    const cancelPsd= ()=>{
        setDisabled(!disabled)
        setPsdEditor(true)
        setUsrEditor(true)
    }

    const handleLogout=() => {

        alert(`Admin Data updated. Please login again.`)
        axios.get('/auth/logout')
        .then((res) => {
          alert(res.data.message)
          navigate('/login')
        })
    }

    const submitUserInputs= handleSubmit((data)=>{
        const {admin_username, admin_email} = data;
        
        axios.put("/admin/updateAdminProfile", {admin_username, admin_email,admin_id})
          .then(res => {
            setSuccessMsg(true)
            setUsrEditor(true)
            setDisabled(true)
            setTimeout(()=>{
              setSuccessMsg(false)
                 handleLogout()
                navigate('/admin/*/manageadmin/*/own-creds/*')
            },2000)
          })
          .catch(error => {
            console.error('Error updating value:', error);
            const errorMessage = error.response ? error.response.data.error : 'Failed to update value. Please Try again.';
            setErrorMsg(true)
            setErrorData(errorMessage)
            setTimeout(()=>{
              setErrorMsg(false)
              setUsrEditor(true)
              setDisabled(true)
              },3000)
          });
        
      })

    const submitInputs= handleSubmit((data)=>{
        const newData = {...data, admin_id: `${admin_id}`}
                

        console.log("new data: " + newData);

        axios.put("/admin/updateAdmin", newData)
          .then(res => {
            setSuccessMsg(true)
            setUsrEditor(true)
            setDisabled(true)
            setTimeout(()=>{
              setSuccessMsg(false)
              handleLogout()
            },2000)
          })
          .catch(error => {
            console.error('Error updating value:', error);
            setErrorMsg(true)
            setErrorData(error.response.data.error)
            setTimeout(()=>{
              setErrorMsg(false)
              setUsrEditor(true)
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
                <InputComponent label="Admin Userame" type="text" id="admin_username" name="admin_username" placeholder='Enter new username...' classNm='form-inputs' disabled={disabledTxt} {...name_validation}/>
                <InputComponent label="Admin Email" type="text" id="admin_email" name="admin_email" placeholder='Enter new email...' classNm='form-inputs' disabled={disabledTxt} {...email_validation}/>
               
                {
                    psdEditor ? (
                        <button  className='service-password-edit-btn' onClick={enablePsd}>Edit Password</button>
                    ):
                    (
                    <>
                        <PasswordInputComponent label="Old Password" type="password" id="old_password" name="old_password" placeholder="Enter Old Password" classNm='psd-form-inputs' disabled={disabledTxt} {...name_validation}/>
                        <PasswordInputComponent label="New Password" type="password" id="update_password" name="update_password" placeholder="Enter Password" classNm='psd-form-inputs' disabled={disabledTxt} {...conf_password_validation}/>
                        <PasswordInputComponent label="Confirm Password" type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password" classNm='psd-form-inputs' disabled={disabledTxt} {...conf_password_validation}/>
                        <button  className='service-password-edit-btn' onClick={cancelPsd}>Cancel Edit Password</button>
                        <button  className='service-password-edit-btn' onClick={submitInputs}>Save Data</button>
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
                (usrEditor && psdEditor) && (
                    <button  className='service-setting-edit-btn' onClick={enableUsername}>Edit Username</button>
                )}

                {
                (!usrEditor && psdEditor) && (
                    <button  className='service-setting-save-btn' onClick={submitUserInputs}>Save</button>
                )
                }
            </div>
          </form>
        </FormProvider>
    </div>
     )
}

export default OwnAdminSettingCard