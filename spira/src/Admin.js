import React from 'react'
import './Admin.css'
import AdminHeader from './components/AdminHeader'
import AdminNav from './components/AdminNav'
import  {Route, Routes} from "react-router-dom"
import Dashboard from './components/Dashboard'
import CustomizationPage from './components/CustomizationPage'

function Admin() {
  return (
    <div className='admin-page'>
        <AdminHeader adminName="Kevin J"/>
        <AdminNav />
        <div className='admin-body'>
          <Routes>
            <Route exact path="*" element={<Dashboard/>}/>
            <Route exact path="*/pagecustom" element={<CustomizationPage/>}/>
          </Routes>
        </div>
    </div>
  )
}

export default Admin