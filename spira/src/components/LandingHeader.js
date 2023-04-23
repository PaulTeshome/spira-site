import React from 'react'
import './LandingHeader.css'
import FixedHeader from './FixedHeader'
import { motion } from 'framer-motion'


function LandingHeader() {
  return (
    <div>
      <div  id="home" className='header-container col-12'>
        <div className='landing-header-bg col-12'></div>
        <FixedHeader logo_link="#home" services="#services" about="#abtUs"  hireUs="/hireUs#top"/>
        <motion.div className='spira-heading col-6'
          animate={{
            opacity:[0,0.4,0.8,1]
          }}

          transition={{
            duration: 2
          }}
        >
          <span className='large-heading'>SPIRA</span><br/>
          <span className='small-heading'>DIGITAL MARKETING AGENCY</span>
        </motion.div>
      </div>
    </div>
  )
}

export default LandingHeader