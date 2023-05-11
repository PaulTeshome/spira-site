import React,{useEffect} from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import './HireForm.css'
import InputComponent from './InputComponent'
import TextInput from './TextInput'
import FixedHeader from './FixedHeader'
import RadioComponent from './RadioComponent'

function HireForm() {
  useEffect(()=>{
    document.title='Hire Us '
  },[])

  const methods= useForm({
    defaultValues:{
      services:'marketing'
    }
  })

  const { control,handleSubmit}=methods

  const submitInputs= handleSubmit((data)=>{
    console.log('inputs',data)
  })

  return (
    <div className='hire-form-container'>
      <FixedHeader logo_link="/#home" services="/#services" about="/#abtUs" hireUs=""/>
      <div className='form-container' id="top">
        <FormProvider {...methods}>
          <form className='hire-form' onSubmit={e => e.preventDefault()} noValidate>
              <InputComponent label="First Name" type="text" id="fname" name="fname" placeholder='Enter First Name' classNm='form-inputs' />
              <InputComponent label="Last Name" type="text" id="lname" name="lname" placeholder='Enter Last Name' classNm='form-inputs'/>
              <InputComponent  label="Email" type="Email" id="email" name="email" placeholder='Enter your email' classNm='form-inputs' />
              <InputComponent label="Company Name" type="text" id="cname" name="cname" placeholder='Enter Company Name' classNm='form-inputs' />
              <InputComponent label="Phone" type="tel" id="phone" name="phone" placeholder='Enter Phone Number' classNm='form-inputs'/>
              
              <label>
                Tell us how we could be of help
              </label><br/>
              
              <RadioComponent value="marketing" label="Marketing" name="services" />
              <RadioComponent value="accMgmt" label="Accounting Management" name="services" />
              <RadioComponent value="content" label="Content Creation" name="services"/>
              <RadioComponent value="other" label="Other" name="services"/>
              
              <TextInput textLabel="Specify" name="spec"  placeholder='Specify your choice above' required={false}/>

              <button  className='form-btn' onClick={submitInputs}>Submit</button>
          </form>
        </FormProvider>
       
        <DevTool control={control}/>
      </div>
        
    </div>
  )
}

export default HireForm