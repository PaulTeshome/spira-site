import React from 'react'
import './LandingHeader.css'
import logo from '../images/spira_logo1 1.png'

function LandingHeader() {
  return (
    <div>
    <div className='header-container'>
       <button className='menuItem hireBtn'>Hire us</button>
        <a className='menuItem' href='app.js'>Services</a>
        <span className='menuItem'>About us</span>
        <a  href='app.js'>
          <img className='menuLogo' src={logo} alt="spira logo"/>
        </a>
    </div>
    <div className='quote-container'>
        <span className="quote">EMPOWREING YOUR BRAND IN THE DIGITAL SPACE</span>
 </div>
 </div>
  )
}

export default LandingHeader