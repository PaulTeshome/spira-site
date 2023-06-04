import React,{useState} from 'react'
import { motion } from 'framer-motion'

function ServicesCard({service_name:name,service_desc:desc}) {
  const [isOpen, openCard]= useState(false)

  const handleOpening= () => {
    openCard(prevState => !prevState)
  }

  return (
    <div>
        <div className='services-card'>
            <span className='services-name'>{name}</span>
            <motion.button className='dropdown-btn' onClick={handleOpening}
                animate={{
                  rotate: isOpen?180:0,
                }}

                transition={{
                  ease: 'easeOut'
                }}

            ></motion.button>
        </div>
        <motion.div className='services-desc-card'
          animate={{
            y:isOpen?0:-35,
            height: isOpen?'auto':'0'
          }}

          initial={{
            height: '0',
            y:0
          }}
          transition={{
            ease: 'easeOut'
          }}
        >
           {desc}
        </motion.div>
    </div>
  
  )
}

export default ServicesCard