import React from 'react'

function InputComponent({label, type, name, placeholder}) {
  return (
    <div>
    <label>
        {label}<br/>
        <input type={type} name={name} placeholder={placeholder}/><br/>
    </label>
    </div>
  )
}

export default InputComponent