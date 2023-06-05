import React,{ useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import TextInput from './TextInput'
import { name_validation, text_validation } from './utils/inputValidations'
import {BsFillCheckSquareFill, BsFillXSquareFill} from 'react-icons/bs'
import './styles/ServicesSettingCard.css'
import axios from 'axios'

function NewTestimonialCard({onClose}) {

    const [successMsg,setSuccessMsg]= useState(false)
    const [errorMsg,setErrorMsg]= useState(false)
    const [errorData,setErrorData]= useState(" ")


  
    const methods= useForm()
    
    const {handleSubmit}=methods
  
    const submitInputs= handleSubmit((data)=>{
        axios.post("/testimonials/addTestimonial", data)
        .then(res => {
            setSuccessMsg(true)
            setTimeout(()=>{
                          setSuccessMsg(false)
                          onClose();
                      },2000)
            
        })
        .catch(error => {
          console.error('Error adding value:', error);
          const errorMessage = error.response ? error.response.data.error : 'Failed to add value. Please Try again.';
          setErrorMsg(true)
          setErrorData(errorMessage)
          setTimeout(()=>{
            setErrorMsg(false)
             onClose();
            },5000)
        });
  
    })

  return (
    <div className='service-setting-card'>
        <FormProvider {...methods}>
          <form className='service-setting-form' onSubmit={e => e.preventDefault()} noValidate>
            <div className='service-setting-inputs'>
                <InputComponent label="Testimonial Owner" type="text" id="testimonial_owner" name="testimonial_owner" placeholder='Enter testimonial owner...' classNm='form-inputs' {...name_validation}/>
                <TextInput textLabel="Testimonial Text" name="testimonial_text"  placeholder='Enter testimonial' {...text_validation}/>
            </div>
            <div className='service-setting-controls'>
                {successMsg && (
                    <motion.p className="service-success-msg"
                        initial= {{ opacity: 0, y: 10 }}
                        animate= {{ opacity: 1, y: 0 }}
                        exit= {{ opacity: 0, y: 10 }}
                        transition= {{ duration: 0.5 , ease: 'easeInOut'}}>
                    <BsFillCheckSquareFill /> Testimonial added successfully
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

                    <button  className='service-setting-edit-btn' onClick={submitInputs}>Add Testimonial</button>
                    <button  className='service-setting-save-btn' onClick={onClose}>Cancel</button>
            </div>
          </form>
        </FormProvider>
    </div>
  )
}

export default NewTestimonialCard