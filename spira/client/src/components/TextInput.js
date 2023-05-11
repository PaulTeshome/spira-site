import React from 'react'
import { useFormContext } from 'react-hook-form';
import './TextInput.css'

function TextInput({textLabel,name,placeholder, required}) {

  const {register} =useFormContext();
  return (
    <div className='text-input-holder'>
        <label className='text-input-label'>
            {textLabel}<br/>
            <textarea className='text-inputs' placeholder={placeholder} 
            {...register(name,{
              required:{
                value:required,
                message: 'Field is required'
              }
            })}/>
        </label>
    </div>
  )
}

export default TextInput