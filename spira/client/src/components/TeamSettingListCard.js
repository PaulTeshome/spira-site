import React,{useEffect, useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import TextInput from './TextInput'
import { name_validation, text_validation } from './utils/inputValidations'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import './styles/RecentWorksListCard.css' 

function TeamSettingListCard({key,member_name, member_position,member_image}) {
    const [successMsg,setSuccessMsg]= useState(false)
    const [disabled,setDisabled]= useState(true)
    const [editor,setEditor]= useState(true)
    const [image,setImage]= useState('')

    const disabledTxt = disabled?"disabled":""

    const enableForm= ()=>{
        setDisabled(!disabled)
        setEditor(false)
    }

    const deleteForm= ()=>{
        let confDel= window.confirm("Are you sure you want to delete project data?")

        if (confDel){
          alert("Delete")
        }else{
          alert("no delete")
        }
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
        member_name:member_name,
        member_position:member_position,
      }
    })
    
    const {handleSubmit}=methods
  
    const submitInputs= handleSubmit((data)=>{
      const imageData= new FormData();
      imageData.append('member_image',image)
      const newData={...data,key}
      console.log("image name ",image)
      console.log('inputs',newData)
      setSuccessMsg(true)
      setEditor(true)
      setDisabled(true)
      setTimeout(()=>{setSuccessMsg(false)},2000)
    })
    
  return (
    <div className='recent-setting-card'>
        <FormProvider {...methods}>
          <form className='recent-setting-form' onSubmit={e => e.preventDefault()} noValidate>
            <div className='recent-setting-inputs'>
              <InputComponent label="Member Name" type="text" id="member_name" name="member_name" placeholder='Enter Member Name...' classNm='form-inputs' disabled={disabledTxt} {...name_validation}/>
              <InputComponent label="Member Image" type="file" id="member_image" name="member_image" classNm='form-file-inputs' disabled={disabledTxt} onchange={handleImage} />
              <TextInput textLabel="Member Position" name="member_position"  placeholder='Enter Member Position' disabled={disabledTxt} {...text_validation}/>
            </div>
            <div className='recent-setting-controls'>
                {successMsg && (
                    <motion.p className="recent-success-msg"
                        initial= {{ opacity: 0, y: 10 }}
                        animate= {{ opacity: 1, y: 0 }}
                        exit= {{ opacity: 0, y: 10 }}
                        transition= {{ duration: 0.5 , ease: 'easeInOut'}}>
                    <BsFillCheckSquareFill /> Member Updated successfully
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

export default TeamSettingListCard