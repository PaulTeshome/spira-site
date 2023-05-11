import React from 'react'
import { useFormContext } from 'react-hook-form';
import './RadioComponent.css'

function RadioComponent({value,label,name}) {
  const {register} =useFormContext();
  return (
    <div className="radio">
        <label htmlFor={name}>
        <input
            type="radio"
            value={value}
            id={value}
            {...register(name, 
               { 
                required: true 
              })}
        />
        {label}
        </label>
    </div>
  );
}

export default RadioComponent