// written by Paul T. Hailemeskel

import React,{useState} from 'react'
import './MottoSection.css'
import illust1 from '../images/ad_illustration.svg'
import illust2 from '../images/client_illustration.svg'
import { motion } from 'framer-motion'

function MottoSection({motto, description}) {

  const [m_anim,mSwitcher] = useState(false)
  const [q_anim,qSwitcher] = useState(false)

  // const change_m_Animation=() => {
  //   mSwitcher(true)
    
  // }

  // const change_q_Animation=() => {
  //   qSwitcher(prevState=> !prevState)
    
  // }

  return (
    <div className='motto-section'>
        <div className='motto-bg-wrapper' onMouseEnter={()=>{mSwitcher(true)}} onMouseLeave={()=>{mSwitcher(false)}} >
          <div className='motto-bg'>
            <motion.div className='quote-container'
                animate={{
                  x: m_anim? [-500,0] :0
                }}

                transition={{
                  ease: 'easeOut',
                  duration:3
                }}
            >
                <span className="quote">{motto}</span>
            </motion.div>
            <motion.div className='quote-logo'
              animate={{
                x: m_anim? [500,0] :0
              }}

              transition={{
                ease: 'easeOut',
                duration:3
              }}
            >
                <img id='illust1' src={illust1} alt='motto first illustration'/>
            </motion.div>
          </div>
       </div>
       <div className='description-wrapper'  onMouseEnter={()=>{qSwitcher(true)}} onMouseLeave={()=>{qSwitcher(false)}}>
          <motion.div className='description-logo'
            initial={{
              opacity:0
            }}
            
            animate={{
              scale: q_anim? [0,1] :[1,0.9],
              opacity: q_anim? [0,1] :1
            }}

            transition={{
              ease: 'easeOut',
              duration:3
            }}
          >
              <img id='illust2' src={illust2} alt='motto first illustration'/>
          </motion.div>
          <motion.div className='desc-container'
            initial={{
              opacity:0
            }}

            animate={{
              scale: q_anim? [0,1] :[1,0.9],
              opacity: q_anim? [0,1] :1
            }}
            
            transition={{
              ease: 'easeOut',
              duration:3
            }}          
          >
              <span className="description">{description}</span>
          </motion.div>
       </div>
        
    </div>
  )
}

export default MottoSection