import React from 'react'
import './HireForm.css'
import InputComponent from './InputComponent'

function HireForm() {
  return (
    <div>
        <form>
            <InputComponent label="First Name" type="text" name="fname" placeholder='Enter First Name'/>
            <InputComponent label="Last Name" type="text" name="lname" placeholder='Enter Last Name'/>
            <InputComponent  label="Email" type="Email" name="email" placeholder='Enter your email'/>
            <InputComponent label="Company Name" type="text" name="cname" placeholder='Enter Company Name'/>
            <InputComponent label="Phone" type="tel" name="phone" placeholder='Enter Phone Number'/>
            <InputComponent label="Tell us how we could be of help" type="radio" name="phone" placeholder='Enter Phone Number'/>
            <label>
            Specify<br/>
            <textarea name="spec" placeholder='Specify your choice above'/>
            </label>
            <InputComponent type="submit" name="submit" value="Submit"/>
        </form>
        

    </div>
  )
}

export default HireForm