import React from 'react'
import './Footer.css'

function Footer() {
  let date = new Date();
  return (
    <footer className='spira-footer'>
      <span className='footer-title'>SPIRA</span>
      <div className='footer-content'>
        <div className='footer-contacts'>

        </div>
        <div className='footer-links'>


        </div>
      </div>
      <span className='footer-end'>
        Copyright &copy;  {date.getFullYear()} Digital Marketing Agency. All rights reserved.
      </span>
    </footer>
  )
}

export default Footer