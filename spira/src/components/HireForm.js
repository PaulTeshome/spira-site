import React from 'react'
import './HireForm.css'
import InputComponent from './InputComponent'

function HireForm() {
  return (
    <div className='hire-form-container'>
      <div className='form-container'>
        {/* <div className='contract-pic'> 
        </div> */}
        <form className='hire-form'>
            <InputComponent label="First Name" type="text" name="fname" placeholder='Enter First Name'/>
            <InputComponent label="Last Name" type="text" name="lname" placeholder='Enter Last Name'/>
            <InputComponent  label="Email" type="Email" name="email" placeholder='Enter your email'/>
            <InputComponent label="Company Name" type="text" name="cname" placeholder='Enter Company Name'/>
            <InputComponent label="Phone" type="tel" name="phone" placeholder='Enter Phone Number'/>
            <label>
            Tell us how we could be of help<br/>

            <input type="radio" value="Marketing" name="marketing" checked="true" /> Marketing<br/>
            <input type="radio" value="Accounting Management" name="accounting" /> Accounting Management<br/>
            <input type="radio" value="contentCreation" name="content" /> Content Creation<br/>
            <input type="radio" value="other" name="content" /> Other<br/>
            </label>
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