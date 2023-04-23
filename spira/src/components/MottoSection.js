import React from 'react'
import './MottoSection.css'
import illust1 from '../images/ad_illustration.svg'
import illust2 from '../images/client_illustration.svg'
import { motion } from 'framer-motion'

function MottoSection({motto, description}) {
  return (
    <div className='motto-section'>
        <div className='motto-bg-wrapper'>
          <div className='motto-bg'>
            <div className='quote-container'>
                <span className="quote">{motto}</span>
            </div>
            <div className='quote-logo'>
                <img id='illust1' src={illust1} alt='motto first illustration'/>
            </div>
          </div>
       </div>
       <div className='description-wrapper'>
        <div className='description-logo'>
              <img id='illust2' src={illust2} alt='motto first illustration'/>
          </div>
          <div className='desc-container'>
              <span className="description">{description}</span>
          </div>
       </div>
        
    </div>
  )
}

export default MottoSection