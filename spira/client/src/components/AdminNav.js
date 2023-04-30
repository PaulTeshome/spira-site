import React from 'react'
import './AdminNav.css'
import AdminNavComp from './AdminNavComp'
function AdminNav() {
  return (
    <nav className='admin-nav'>
        <AdminNavComp link="*/*" name="Dashboard"/>
        <AdminNavComp link="*/pagecustom/*" name="Website Customization"/>
        <AdminNavComp link="*/manageadmin/*" name="Manage Adminstrators"/>
        <AdminNavComp link="*" name="Logout"/>
    </nav>
  )
}

export default AdminNav