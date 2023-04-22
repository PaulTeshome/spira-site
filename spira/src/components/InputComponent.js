import React from 'react'
import './InputComponent.css'

function InputComponent({label, type, name, id, placeholder, value, onchange,classNm}) {
  return (
    <div className='input-holder'>
        <label className='label-text'>
        {label}
        </label>
        <input type={type} name={name} id={id} placeholder={placeholder} className={classNm} value={value} onChange={onchange}/><br/>
    </div>
  )
}

export default InputComponent