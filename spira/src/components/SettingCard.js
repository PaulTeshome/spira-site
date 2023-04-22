import React from 'react'
import './SettingCard.css'
import { HashLink as Link } from 'react-router-hash-link'

function SettingCard({title,desc,link}) {
  return (
    <div className='setting-card'>
        <Link to={link}>
            <span className='setting-title'>{title}</span>
            <span className='setting-desc'>{desc}</span>
        </Link>
    </div>
  )
}

export default SettingCard