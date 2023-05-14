import React from 'react'
import './CustomizationPage.css'
import  {Route, Routes} from "react-router-dom"
import CustomSettingChoice from './CustomSettingChoice'
import GeneralPageSettings from './GeneralPageSettings'

function CustomizationPage() {
  return (
    <div className='custom-page-holder'>
      <span className='customization-title'> Website Customization Settings</span>
      <span className='customization-intro'>Welcome to website customization settings! Here you can modify specific contents of your website to your desire.
                                             Please select from the options below to proceed accordingly.</span>
        <div className='customization-body' >
        <Routes>
            <Route exact path="*" element={<CustomSettingChoice/>}/>
            <Route exact path="*/generalpage" element={<GeneralPageSettings/>}/>
        </Routes>

        </div>                       
    
    </div>
  )
}

export default CustomizationPage