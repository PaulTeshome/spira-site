import React from 'react'
import './Footer.css'
import tg_logo from '../images/tg logo.png'
import insta_logo from '../images/insta logo.png'
import mail_logo from '../images/mail logo.png'

function Footer({telegram_link,insta_link,gmail_link,phone1,phone2,email,location}) {
  let date = new Date();
  return (
    <footer className='spira-footer'>
      <span className='footer-title'>SPIRA</span>
      <div className='footer-content'>
        <div className='footer-contacts'>
          <span className='footer-contacts-header'>Contact Us</span>
          <span>Email: <a href={`mailto:${email}`}>{email}</a></span>
          <span>Phone: {phone1},{phone2}</span>
          <span>Location: {location}</span>

        </div>
        <div className='footer-links'>
            <a href={telegram_link}><img src={tg_logo} alt="telegram link"/></a>
            <a href={`mailto:${email}`}><img src={mail_logo} alt="email link"/></a>
            <a href={insta_link}><img src={insta_logo} alt="instagram link"/></a>
        </div>
      </div>
      <span className='footer-end'>
         &copy;  {date.getFullYear()} Spira Digital Marketing Agency. All rights reserved.
      </span>
    </footer>
  )
}

export default Footer