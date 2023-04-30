import React from 'react'
import './TextInput.css'

function TextInput({textLabel,name,value,placeholder,onchange}) {
  return (
    <div className='text-input-holder'>
        <label className='text-input-label'>
            {textLabel}<br/>
            <textarea className='text-inputs' name={name} placeholder={placeholder} value={value} onChange={onchange}/>
        </label>
    </div>
  )
}

export default TextInput