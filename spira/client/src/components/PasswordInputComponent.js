import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence } from 'framer-motion';
import './styles/PasswordInputComponent.css'
import isFormInvalid from './utils/isFormInvalid'
import findInputError from './utils/findInputError'
import InputError from './InputError';

function PasswordInputComponent({label, name, id, placeholder,classNm,validation}) {

    const [visible,setVisible] =useState(false)

    const {register, formState: { errors },
        } = useFormContext()

    const inputError = findInputError(errors, name)
    const isInvalid = isFormInvalid(inputError)
    const type= visible? "text" : "password"
    const toggleText= visible? "Hide" : "Show"

    const psdToggle = ()=>{
        setVisible(visibility=> !visibility)
    }

  return (
    <div className='input-holder'>
      <div className='label-info'>
        <label htmlFor={name} className='label-text'>
            {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
           {isInvalid && ( 
            <InputError
                message={inputError.error.message}
                key={inputError.error.message}
              />
            )            
            }
    
        </AnimatePresence>
      </div>
       <div className='psd-holder'>
        <input type={type} id={id} placeholder={placeholder} className={classNm} 
            {...register(name, validation)}

            />
            <span className='toggle-psd' onClick={psdToggle}>{toggleText}</span>
            <br/>
       </div>
       
    </div>
  )
}

export default PasswordInputComponent