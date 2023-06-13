import React from 'react'
import './styles/AdminNav.css'
import AdminNavComp from './AdminNavComp'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function AdminNav() {

  const navigate= useNavigate()

  const handleLogout=() => {
    let checkLog= window.confirm('Are you sure you want to logout?')

    if(checkLog){
      axios.get('/auth/logout')
      .then((res) => {
        alert(res.data.message)
        navigate('/login')
      })
    }
    
  }

  return (
    <nav className='admin-nav'>
        <AdminNavComp link="*/*" name="Hire Requests"/>
        <AdminNavComp link="*/pagecustom/*" name="Website Customization"/>
        <AdminNavComp link="*/manageadmin/*" name="Manage Adminstrators"/>
        <div className='nav-comp'>
             <span className='nav-comp-logout' onClick={handleLogout} >logout</span>
         </div>
    </nav>
  )
}

export default AdminNav