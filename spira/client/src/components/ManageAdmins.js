import React from 'react'
import './styles/ManageAdmins.css'
import { Route, Routes } from 'react-router-dom'
import ManageAdminSettingChoice from './ManageAdminSettingChoice'
import OtherAdminSettings from './OtherAdminSettings'
import OwnAdminSettings from './OwnAdminSettings'

function ManageAdmins({userId}) {
  return (
    <div className='manage-admin-holder'>
      <span className='manage-title'>Admin Managment</span>
      <span className='manage-intro'>Welcome to admin manage! Here you can edit, add or remove admins for your system.
                                             Please select from the options below to proceed accordingly.</span>
          <div className='manage-body'>
            <Routes>
                <Route exact path="*" element={<ManageAdminSettingChoice/>}/>
                <Route exact path="*/other-admins/*" element={<OtherAdminSettings userId={userId}/>}/>
                <Route exact path="*/own-creds/*" element={<OwnAdminSettings userId={userId}/>}/>
              </Routes>
          </div>       
    </div>
  )
}

export default ManageAdmins