import React from 'react'
import './HireForm.css'
import InputComponent from './InputComponent'
import TextInput from './TextInput'
import FixedHeader from './FixedHeader'
import RadioComponent from './RadioComponent'

function HireForm() {
  return (
    <div className='hire-form-container'>
      <FixedHeader logo_link="/#home" services="/#services" about="/#abtUs" hireUs=""/>
      <div className='form-container' id="top">
        <form className='hire-form'>
            <InputComponent label="First Name" type="text" id="fname" name="fname" placeholder='Enter First Name' classNm='form-inputs'/>
            <InputComponent label="Last Name" type="text" id="lname" name="lname" placeholder='Enter Last Name' classNm='form-inputs'/>
            <InputComponent  label="Email" type="Email" id="email" name="email" placeholder='Enter your email' classNm='form-inputs'/>
            <InputComponent label="Company Name" type="text" id="cname" name="cname" placeholder='Enter Company Name' classNm='form-inputs'/>
            <InputComponent label="Phone" type="tel" id="phone" name="phone" placeholder='Enter Phone Number' classNm='form-inputs'/>
            
            <label>
               Tell us how we could be of help
            </label><br/>
            
            <RadioComponent value="marketing" label="Marketing" checked={true}/>
            <RadioComponent value="accMgmt" label="Accounting Management" checked={true}/>
            <RadioComponent value="content" label="Content Creation" checked={true}/>
            <RadioComponent value="other" label="Other" checked={true}/>
            
            <TextInput textLabel="Specify" name="spec"  placeholder='Specify your choice above'/>

            <InputComponent type="submit" name="submit" value="Submit" classNm='form-inputs'/>
        </form>
      </div>
        
    </div>
  )
}

export default HireForm