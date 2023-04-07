import React from 'react'

function InputComponent({label, type, name, placeholder, value}) {
  return (
    <div>
    <label>
        {label}<br/>
        <input type={type} name={name} placeholder={placeholder} className='hire-form-inputs' value={value}/><br/>
    </label>
    </div>
  )
}

export default InputComponent