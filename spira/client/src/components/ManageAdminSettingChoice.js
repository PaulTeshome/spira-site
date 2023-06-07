import React from 'react'
import './styles/ManageAdmins.css'
import SettingCard from './SettingCard'

function ManageAdminSettingChoice() {
  return (
    <div className='custom-setting-holder'>        
        <SettingCard title="Edit own credentials" desc="Edit current logged in admin's account detail" link="*/own-creds/*"/>
        <SettingCard title="Add/Remove admin" desc="Add or remove admin to/from the system" link="*/other-admins/*"/>
    </div>
  )
}

export default ManageAdminSettingChoice