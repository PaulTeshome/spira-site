import React,{ useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import TextInput from './TextInput'
import { text_validation } from './utils/inputValidations'
import {BsFillCheckSquareFill, BsFillXSquareFill} from 'react-icons/bs'
import './styles/RecentWorksListCard.css'
import axios from 'axios'

function NewProjectCard({onClose}) {
    const [successMsg,setSuccessMsg]= useState(false)
    const [errorMsg,setErrorMsg]= useState(false)
    const [errorData,setErrorData]= useState(" ")
    const [image,setImage]= useState(null)


  
    const methods= useForm()
    
    const {handleSubmit}=methods
  
    const submitInputs= handleSubmit((data)=>{
        
        // const imageData = new FormData();
        // imageData.append('project_image', );
        const imageName=  image.name
        const newData={...data,imageName}
        
        console.log("image name", image.name)
        console.log("new data", newData)

        axios.post("/projects/addProject", newData)
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
        setImage(file);
      };

  return (
    <div className='recent-setting-card'>
    <FormProvider {...methods}>
      <form className='recent-setting-form' onSubmit={e => e.preventDefault()} noValidate encType="multipart/form-data">
        <div className='recent-setting-inputs'>
          <InputComponent label="Project Title" type="text" id="project_title" name="project_title" placeholder='Enter project title...' classNm='form-inputs' {...text_validation}/>
          <InputComponent label="Project Image" type="file" id="project_image" name="project_image" classNm='form-file-inputs' oninput={handleImage} />
          <TextInput textLabel="Project Description" name="project_description"  placeholder='Enter project description'  {...text_validation}/>
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

export default NewProjectCard