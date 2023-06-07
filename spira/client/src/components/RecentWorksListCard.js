import React,{useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import TextInput from './TextInput'
import { text_validation } from './utils/inputValidations'
import {BsFillCheckSquareFill, BsFillXSquareFill} from 'react-icons/bs'
import './styles/RecentWorksListCard.css'
import axios from 'axios'

function RecentWorksListCard({project_id,project_title, project_description,old_image,update}) {

  const [successMsg,setSuccessMsg]= useState(false)
  const [deleteMsg,setDeleteMsg]= useState(false)
  const [errorMsg,setErrorMsg]= useState(false)
  const [errorData,setErrorData]= useState(" ")
  const [disabled,setDisabled]= useState(true)
  const [editor,setEditor]= useState(true)
  const [image,setImage]= useState({file:[]})


  const methods= useForm({
    defaultValues:{
      project_title:project_title,
      project_description:project_description,
    }
  })
  
  const {handleSubmit}=methods

    const disabledTxt = disabled?"disabled":""

    const enableForm= ()=>{
        setDisabled(!disabled)
        setEditor(false)
    }

    const deleteForm= handleSubmit((data)=>{
      let confDel= window.confirm(`Are you sure you want to delete ${project_title}?`)

      if (confDel){
        axios.delete("/projects/deleteProject", { data: { project_id: project_id, old_image: old_image}})
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
        
      const formData = new FormData();
      formData.append('project_id', project_id);
      formData.append('project_title', data.project_title);
      formData.append('project_description', data.project_description);
      formData.append('old_image',old_image);
      formData.append('project_image', image.file);
      
      

      axios.put("/projects/updateProject", formData,
      {   
          headers: { "Content-Type": "multipart/form-data" } 
      })
      .then(res => {
          setSuccessMsg(true)
          setTimeout(()=>{
                        setSuccessMsg(false)
                        setEditor(true)
                        setDisabled(true)
                        update();
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
           update();
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
              <InputComponent label="Project Title" type="text" id="project_title" name="project_title" placeholder='Enter project title...' classNm='form-inputs' disabled={disabledTxt} {...text_validation}/>
              <InputComponent label="Project Image (When editing reupload image)" type="file" id="project_image" name="project_image" classNm='form-file-inputs' disabled={disabledTxt} oninput={handleImage} />
              <TextInput textLabel="Project Description" name="project_description"  placeholder='Enter project description' disabled={disabledTxt} {...text_validation}/>
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

                {deleteMsg && (
                    <motion.p className="service-success-msg"
                        initial= {{ opacity: 0, y: 10 }}
                        animate= {{ opacity: 1, y: 0 }}
                        exit= {{ opacity: 0, y: 10 }}
                        transition= {{ duration: 0.5 , ease: 'easeInOut'}}>
                    <BsFillCheckSquareFill /> Project deleted successfully
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
                    <button  className='recent-settings-edit-btn' onClick={enableForm}>Edit</button>
                )}

               { editor && (
                    <button  className='recent-settings-save-btn' onClick={deleteForm}>Delete</button>
                )}

                {
                !editor && (
                    <button  className='recent-settings-save-btn' onClick={submitInputs}>Save</button>
                )
                }
            </div>
          </form>
        </FormProvider>
    </div>
  )
}

export default RecentWorksListCard