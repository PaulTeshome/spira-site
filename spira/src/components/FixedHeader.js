import React,{useState} from 'react'
import logo from '../images/spira_logo1 1.png'
import { HashLink as Link } from 'react-router-hash-link'

function FixedHeader({logo_link,services, about, hireUs}) {

  const [navbg,setNavbg]=useState(false)

  const changeBg= ()=>{
    if(window.scrollY>=400){
      setNavbg(true)
    }else{
      setNavbg(false)
    }
  }

  window.addEventListener('scroll',changeBg)

  const bgColor= navbg?"nav-bg":""
  const fixedHeaderBg= hireUs===""?'fixed-header-hire':'fixed-header'
  return (
    <nav className={`${fixedHeaderBg} ${bgColor} `}>

        <Link className='menu-logo' to={logo_link} smooth>
            <img className='menu-logo' src={logo} alt="spira logo"/>
        </Link>
        <div className='menu-items-holder'>
          <Link className='menu-item' to={about} smooth>About Us</Link>
          <Link className='menu-item' to={services} smooth>Services</Link>
          <Link className={hireUs===""?'invisible-hire':'menu-item hire-btn '} to={hireUs} smooth>Hire us</Link>
        </div>

        
        
    </nav>
  )
}

export default FixedHeader