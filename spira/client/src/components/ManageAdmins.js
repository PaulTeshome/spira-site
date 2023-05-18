import React from 'react'
import './styles/ManageAdmins.css'
import SettingCard from './SettingCard'

function ManageAdmins() {
  return (
    <div className='manage-admin-holder'>
      <span className='manage-title'>Admin Managment</span>
      <span className='manage-intro'>Welcome to admin manage! Here you can edit, add or remove admins for your system.
                                             Please select from the options below to proceed accordingly.</span>
        <SettingCard title="Edit own credentials" desc="Edit current logged in admin's account detail" link="/"/>
        <SettingCard title="Add/Remove admin" desc="Add or remove admin to/from the system" link="/"/>
    </div>
  )
}

export default ManageAdmins