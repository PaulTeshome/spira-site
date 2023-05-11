import React,{useState, useEffect} from 'react'
import './HireForm.css'
import InputComponent from './InputComponent'
import TextInput from './TextInput'
import FixedHeader from './FixedHeader'
import RadioComponent from './RadioComponent'

function HireForm() {
  useEffect(()=>{
    document.title='Hire Us '
  },[])

  const [inputs,setInputs]= useState({
    fname:'',
    lname:'',
    email:'',
    cname:'',
    phone:'',
    services:'marketing',
    spec:''
  })

  const changeInputs= e=>{

    setInputs({
      ...inputs,
    [e.target.name]: e.target.value
    })
  }

  const submitInputs= event=>{
    alert(JSON.stringify(inputs))
    event.preventDefault()
  }

  return (
    <div className='hire-form-container'>
      <FixedHeader logo_link="/#home" services="/#services" about="/#abtUs" hireUs=""/>
      <div className='form-container' id="top">
        <form className='hire-form' onSubmit={submitInputs}>
            <InputComponent label="First Name" type="text" id="fname" name="fname" placeholder='Enter First Name' classNm='form-inputs' value={inputs.fname} onchange={changeInputs}/>
            <InputComponent label="Last Name" type="text" id="lname" name="lname" placeholder='Enter Last Name' classNm='form-inputs' value={inputs.lname} onchange={changeInputs} />
            <InputComponent  label="Email" type="Email" id="email" name="email" placeholder='Enter your email' classNm='form-inputs' value={inputs.email} onchange={changeInputs}/>
            <InputComponent label="Company Name" type="text" id="cname" name="cname" placeholder='Enter Company Name' classNm='form-inputs' value={inputs.cname} onchange={changeInputs}/>
            <InputComponent label="Phone" type="tel" id="phone" name="phone" placeholder='Enter Phone Number' classNm='form-inputs' value={inputs.phone} onchange={changeInputs}/>
            
            <label>
               Tell us how we could be of help
            </label><br/>
            
            <RadioComponent value="marketing" label="Marketing" name="services" checked={inputs.services === 'marketing'}  onchange={changeInputs}/>
            <RadioComponent value="accMgmt" label="Accounting Management" name="services" checked={inputs.services === 'accMgmt'}  onchange={changeInputs}/>
            <RadioComponent value="content" label="Content Creation" name="services" checked={inputs.services === 'content'}  onchange={changeInputs}/>
            <RadioComponent value="other" label="Other" name="services" checked={inputs.services === 'other'}  onchange={changeInputs}/>
            
            <TextInput textLabel="Specify" name="spec"  placeholder='Specify your choice above' value={inputs.spec} onchange={changeInputs}/>

            <InputComponent type="submit" name="submit" value="Submit" classNm='form-inputs'/>
        </form>
      </div>
        
    </div>
  )
}

export default HireForm