import React from 'react'
import './TextInput.css'

function TextInput({textLabel,name,value,placeholder}) {
  return (
    <div className='text-input-holder'>
        <label className='text-input-label'>
            {textLabel}<br/>
            <textarea className='text-inputs' name={name} placeholder={placeholder} value={value}/>
        </label>
    </div>
  )
}

export default TextInput