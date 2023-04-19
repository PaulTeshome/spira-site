import React from 'react'
import logo from '../images/spira_logo1 1.png'
import { HashLink as Link } from 'react-router-hash-link'

function FixedHeader({logo_link,services, about, hireUs}) {
  const fixedHeaderBg= hireUs===""?'fixed-header-hire':'fixed-header'
  return (
    <nav className={`${fixedHeaderBg} col-12`}>
        <Link className={hireUs===""?'invisible-hire':'menu-item hire-btn col-1'} to={hireUs} smooth>Hire us</Link>
        <Link className='menu-item' to={services} smooth>Services</Link>
        <Link className='menu-item' to={about} smooth>About Us</Link>
        <Link  to={logo_link} smooth>
            <img className='menu-logo col-0' src={logo} alt="spira logo"/>
        </Link>
    </nav>
  )
}

export default FixedHeader