import React from 'react'
import { useFormContext } from 'react-hook-form'
import isFormInvalid from './utils/isFormInvalid'
import findInputError from './utils/findInputError'
import { AnimatePresence } from 'framer-motion'
import InputError from './InputError';
import './TextInput.css'

function TextInput({textLabel,name,placeholder, validation}) {

  const {register, formState: { errors },
} = useFormContext()

const inputError = findInputError(errors, name)
const isInvalid = isFormInvalid(inputError)
  return (
    <div className='text-input-holder'>
       <div className='label-info'>
        <label htmlFor={name} className='text-input-label'>
            {textLabel}
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
            <textarea className='text-inputs' placeholder={placeholder} 
            {...register(name,validation)}/>
       
    </div>
  )
}

export default TextInput