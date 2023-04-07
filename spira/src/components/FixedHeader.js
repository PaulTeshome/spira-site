import React from 'react'
import logo from '../images/spira_logo1 1.png'

function FixedHeader({services, about}) {
  return (
    <div className='fixed-header col-12'>
        <button className='menu-item hire-btn col-1'>Hire us</button>
        <a className='menu-item' href={services}>Services</a>
        <a className='menu-item' href={about}>About Us</a>
        <a  href='app.js'>
            <img className='menu-logo col-0' src={logo} alt="spira logo"/>
        </a>
    </div>
  )
}

export default FixedHeader