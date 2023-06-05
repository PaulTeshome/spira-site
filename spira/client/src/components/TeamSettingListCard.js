import React,{useState} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import { motion } from 'framer-motion'
import InputComponent from './InputComponent'
import TextInput from './TextInput'
import { name_validation, text_validation } from './utils/inputValidations'
import {BsFillCheckSquareFill, BsFillXSquareFill} from 'react-icons/bs'
import './styles/RecentWorksListCard.css'
import axios from 'axios'

function TeamSettingListCard({member_id,member_name, member_position,old_image,update}) {

  const [successMsg,setSuccessMsg]= useState(false)
  const [deleteMsg,setDeleteMsg]= useState(false)
  const [errorMsg,setErrorMsg]= useState(false)
  const [errorData,setErrorData]= useState(" ")
  const [disabled,setDisabled]= useState(true)
  const [editor,setEditor]= useState(true)
  const [image,setImage]= useState({file:[]})

    
  const methods= useForm({
    defaultValues:{
      member_name:member_name,
      member_position:member_position,
    }
  })
  
  const {handleSubmit}=methods


    const disabledTxt = disabled?"disabled":""

    const enableForm= ()=>{
        setDisabled(!disabled)
        setEditor(false)
    }

    const deleteForm= handleSubmit((data)=>{
      let confDel= window.confirm(`Are you sure you want to delete ${member_name}?`)

      if (confDel){
        axios.delete("/team/deleteMember", { data: { member_id: member_id, old_image: old_image}})
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
      formData.append('member_id', member_id);
      formData.append('member_name', data.member_name);
      formData.append('member_position', data.member_position);
      formData.append('old_image',old_image);
      formData.append('member_image', image.file);
      
      

      axios.put("/team/updateMember", formData,
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
              <InputComponent label="Member Name" type="text" id="member_name" name="member_name" placeholder='Enter Member Name...' classNm='form-inputs' disabled={disabledTxt} {...name_validation}/>
              <InputComponent label="Member Image" type="file" id="member_image" name="member_image" classNm='form-file-inputs' disabled={disabledTxt} oninput={handleImage} />
              <TextInput textLabel="Member Position" name="member_position"  placeholder='Enter Member Position' disabled={disabledTxt} {...text_validation}/>
            </div>
            <div className='recent-setting-controls'>
                {successMsg && (
                    <motion.p className="recent-success-msg"
                        initial= {{ opacity: 0, y: 10 }}
                        animate= {{ opacity: 1, y: 0 }}
                        exit= {{ opacity: 0, y: 10 }}
                        transition= {{ duration: 0.5 , ease: 'easeInOut'}}>
                    <BsFillCheckSquareFill /> Member updated successfully
                    </motion.p>
                )}

                {deleteMsg && (
                    <motion.p className="service-success-msg"
                        initial= {{ opacity: 0, y: 10 }}
                        animate= {{ opacity: 1, y: 0 }}
                        exit= {{ opacity: 0, y: 10 }}
                        transition= {{ duration: 0.5 , ease: 'easeInOut'}}>
                    <BsFillCheckSquareFill /> Member deleted successfully
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

export default TeamSettingListCard