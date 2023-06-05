import React,{ useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import TextInput from './TextInput'
import { name_validation, text_validation } from './utils/inputValidations'
import {BsFillCheckSquareFill, BsFillXSquareFill} from 'react-icons/bs'
import './styles/RecentWorksListCard.css'
import axios from 'axios'

function NewMemberCard({onClose}) {
    const [successMsg,setSuccessMsg]= useState(false)
    const [errorMsg,setErrorMsg]= useState(false)
    const [errorData,setErrorData]= useState(" ")
    const [image,setImage]= useState({file:[]})

    const methods= useForm()
    
    const {handleSubmit}=methods
  
    const submitInputs= handleSubmit((data)=>{
        
        const formData = new FormData();
        formData.append('member_name', data.member_name);
        formData.append('member_position', data.member_position);
        formData.append('member_image', image.file);
        
        
        console.log("form data:.....", formData)

        axios.post("/team/addMember", formData,
        {   
            headers: { "Content-Type": "multipart/form-data" } 
        })
        .then(res => {
            setSuccessMsg(true)
            setTimeout(()=>{
                          setSuccessMsg(false)
                          onClose();
                      },2000)
            
        })
        .catch(error => {
          console.error('Error inserting value:', error);
          const errorMessage = error.response ? error.response.data.error : 'Failed to insert value. Please Try again.';
          setErrorMsg(true)
          setErrorData(errorMessage)
          setTimeout(()=>{
            setErrorMsg(false)
             onClose();
            },5000)
        });
  
    })

    const handleImage = (event) => {
        const file = event.target.files[0];
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']; 

        if (allowedTypes.includes(file.type)) {
            setErrorMsg(false);
            setImage({...image,file:file});
        } else {
            setErrorMsg(true);
            setErrorData('Please upload a valid image file (JPEG, PNG, or GIF)');
        }

      };

  return (
    <div className='recent-setting-card'>
        <FormProvider {...methods}>
          <form className='recent-setting-form' onSubmit={e => e.preventDefault()} noValidate>
            <div className='recent-setting-inputs'>
              <InputComponent label="Member Name" type="text" id="member_name" name="member_name" placeholder='Enter Member Name...' classNm='form-inputs'  {...name_validation}/>
              <InputComponent label="Member Image" type="file" id="member_image" name="member_image" classNm='form-file-inputs'  onchange={handleImage} />
              <TextInput textLabel="Member Position" name="member_position"  placeholder='Enter Member Position'  {...text_validation}/>
            </div>
            <div className='recent-setting-controls'>
            {successMsg && (
                <motion.p className="recent-success-msg"
                    initial= {{ opacity: 0, y: 10 }}
                    animate= {{ opacity: 1, y: 0 }}
                    exit= {{ opacity: 0, y: 10 }}
                    transition= {{ duration: 0.5 , ease: 'easeInOut'}}>
                <BsFillCheckSquareFill /> Project updated successfully
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

               
                    <button  className='service-setting-edit-btn' onClick={submitInputs}>Add Project</button>
                    <button  className='service-setting-save-btn' onClick={onClose}>Cancel</button>
                
            </div>
          </form>
        </FormProvider>
    </div>
  )
}

export default NewMemberCard