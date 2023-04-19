import React from 'react'
import './InputComponent.css'

function InputComponent({label, type, name, id, placeholder, value, onchange}) {
  return (
    <div className='input-holder'>
        <label className='label-text'>
        {label}
        </label>
        <input type={type} name={name} id={id} placeholder={placeholder} className='form-inputs' value={value} onChange={onchange}/><br/>
    </div>
  )
}

export default InputComponent