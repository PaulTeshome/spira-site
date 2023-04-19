import React from 'react'
import './HireForm.css'
import InputComponent from './InputComponent'
import FixedHeader from './FixedHeader'
import RadioComponent from './RadioComponent'

function HireForm() {
  return (
    <div className='hire-form-container'>
      <FixedHeader logo_link="/" services="/#services" about="/#abtUs" hireUs=""/>
      <div className='form-container' id="top">
        <form className='hire-form'>
            <InputComponent label="First Name" type="text" id="fname" name="fname" placeholder='Enter First Name'/>
            <InputComponent label="Last Name" type="text" id="lname" name="lname" placeholder='Enter Last Name'/>
            <InputComponent  label="Email" type="Email" id="email" name="email" placeholder='Enter your email'/>
            <InputComponent label="Company Name" type="text" id="cname" name="cname" placeholder='Enter Company Name'/>
            <InputComponent label="Phone" type="tel" id="phone" name="phone" placeholder='Enter Phone Number'/>
            <label>
               Tell us how we could be of help
            </label><br/>
            
            <RadioComponent value="marketing" label="Marketing" checked={true}/>
            <RadioComponent value="accMgmt" label="Accounting Management" checked={true}/>
            <RadioComponent value="content" label="Content Creation" checked={true}/>
            <RadioComponent value="other" label="Other" checked={true}/>
            
            <label>
                Specify<br/>
            <textarea name="spec" placeholder='Specify your choice above'/>
            </label>
            
            <InputComponent type="submit" name="submit" value="Submit"/>
        </form>
      </div>
        
    </div>
  )
}

export default HireForm