import React from 'react'
import './styles/AdminHeader.css'
import logo from '../images/spira_logo1 1.png'
import { HashLink as Link } from 'react-router-hash-link'

function AdminHeader({adminName}) {
  return (
    <div className='admin-header'>
        <Link  to="/#home" smooth>
            <img className='home-logo' src={logo} alt="spira logo"/>
        </Link>
        <span className='admin-title'>Dashboard</span>
        <div className='admin-data'>
            Admin: {adminName}
            {/* <Link className='nav-comp-logout' to="/admin">Logout</Link> */}
        </div>   
    </div>
  )
}

export default AdminHeader