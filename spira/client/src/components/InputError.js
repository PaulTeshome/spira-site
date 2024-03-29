import React from 'react'
import './styles/InputError.css'
import {motion} from 'framer-motion'
import {BiErrorCircle} from 'react-icons/bi'

function InputError({message}) {
    const framer_error = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 10 },
        transition: { duration: 0.5 },
      }
  return (
   
          <motion.p
            className="error-msg"
            {...framer_error}
          >
            <BiErrorCircle/>
            &nbsp;
            {message}
          </motion.p>
        )
      
}

export default InputError