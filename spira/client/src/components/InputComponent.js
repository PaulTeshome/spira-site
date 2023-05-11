import React from 'react'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence } from 'framer-motion';
import './InputComponent.css'
import InputError from './InputError';

function InputComponent({label, type, name, id, placeholder,classNm}) {

  const {register, formState: { errors },
        } = useFormContext()

  console.log(errors.name?.message)
  return (
    <div className='input-holder'>
      <div className='label-info'>
        <label htmlFor={name} className='label-text'>
            {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
            <InputError
              message={errors.name?.message}
            />
        </AnimatePresence>
      </div>
       
        <input type={type} id={id} placeholder={placeholder} className={classNm} 
          {...register(name, {
            required: {
              value: true,
              message:`${label} is required`,
            },
          })}

        /><br/>
    </div>
  )
}

export default InputComponent