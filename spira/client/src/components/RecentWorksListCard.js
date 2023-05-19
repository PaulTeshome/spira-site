import React,{useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import TextInput from './TextInput'
import { text_validation } from './utils/inputValidations'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import './styles/RecentWorksListCard.css'

function RecentWorksListCard({project_id,project_title, project_description,project_image}) {
    const [success,setSuccess]= useState(false)
    const [disabled,setDisabled]= useState(true)
    const [editor,setEditor]= useState(true)
    const [image,setImage]= useState('')

    const disabledTxt = disabled?"disabled":""

    const enableForm= ()=>{
        setDisabled(!disabled)
        setEditor(false)
    }

    function handleImage(e){

      console.log(e.target.files+"here are the files")
      setImage(e.target.files[0])
    }

    useEffect(()=>{
      document.title='Admin Dashboard'
      
    },[])
  
    const methods= useForm({
      defaultValues:{
        project_title:project_title,
        project_description:project_description,
      }
    })
    
    const {handleSubmit}=methods
  
    const submitInputs= handleSubmit((data)=>{
      const imageData= new FormData();
      imageData.append('project_image',image)
      const newData={...data,project_id}
      console.log('inputs',newData)
      setSuccess(true)
      setEditor(true)
      setDisabled(true)
      setTimeout(()=>{setSuccess(false)},2000)
    })
  return (
    <div className='recent-setting-card'>
        <FormProvider {...methods}>
          <form className='recent-setting-form' onSubmit={e => e.preventDefault()} noValidate>
            <div className='recent-setting-inputs'>
              <InputComponent label="Project Title" type="text" id="project_title" name="project_title" placeholder='Enter project title...' classNm='form-inputs' disabled={disabledTxt} {...text_validation}/>
              <InputComponent label="Project Image" type="file" id="project_image" name="project_image" classNm='form-file-inputs' disabled={disabledTxt} onchange={handleImage} />
              <TextInput textLabel="Project Description" name="project_description"  placeholder='Enter project description' disabled={disabledTxt} {...text_validation}/>
            </div>
            <div className='recent-setting-controls'>
                {success && (
                    <motion.p className="recent-success-msg"
                        initial= {{ opacity: 0, y: 10 }}
                        animate= {{ opacity: 1, y: 0 }}
                        exit= {{ opacity: 0, y: 10 }}
                        transition= {{ duration: 0.5 , ease: 'easeInOut'}}>
                    <BsFillCheckSquareFill /> Project updated successfully
                    </motion.p>
                )}

                {
                editor && (
                    <button  className='recent-settings-edit-btn' onClick={enableForm}>Edit</button>
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