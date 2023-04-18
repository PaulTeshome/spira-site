import React from 'react'
import './LandingHeader.css'
import FixedHeader from './FixedHeader'


function LandingHeader() {
  return (
    <div>
      <div  id="home" className='header-container col-12'>
        <div className='landing-header-bg col-12'></div>
        <FixedHeader logo_link="#home" services="#services" about="#abtUs" />
        <div className='spira-heading col-6'>
          <span className='large-heading'>SPIRA</span><br/>
          <span className='small-heading'>DIGITAL MARKETING AGENCY</span>
        </div>
      </div>
    </div>
  )
}

export default LandingHeader