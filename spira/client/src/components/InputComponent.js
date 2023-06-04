import React from 'react'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence } from 'framer-motion';
import './styles/InputComponent.css'
import isFormInvalid from './utils/isFormInvalid'
import findInputError from './utils/findInputError'
import InputError from './InputError';

function InputComponent({label, type, name, id, placeholder,classNm,validation, disabled, onchange, defaultValue}) {

  const {register, formState: { errors },
        } = useFormContext()

  const inputError = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputError)

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
       
        <input type={type} id={id} placeholder={placeholder} className={classNm} disabled={disabled} onChange={onchange} defaultValue={defaultValue}
          {...register(name, validation)}

        /><br/>
    </div>
  )
}

export default InputComponent