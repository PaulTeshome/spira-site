import React from 'react'
import './CustomizationPage.css'
import SettingCard from './SettingCard'

function CustomizationPage() {
  return (
    <div className='custom-page-holder'>
      <span className='customization-title'> Website Customization Settings</span>
      <span className='customization-intro'>Welcome to website customization settings! Here you can modify specific contents of your website to your desire.
                                             Please select from the options below to proceed accordingly.</span>
        <SettingCard title="General Page Elements" desc="Edit elements like email, phone numbers, location of company, introduction motto..." link="/"/>
        <SettingCard title="Our Services list" desc="Add, edit or remove the services listed in the OUR SERVICES section of the website" link="/"/>
        <SettingCard title="Recent Works list" desc="Add,edit or remove the recent projects listed in the RECENT WORKS section of the website" link="/"/>
        <SettingCard title="Team Member" desc="Add, edit or remove team member information listed in the OUR TEAM section of the website" link="/"/>
        <SettingCard title="Testimonials" desc="Add, edit or remove customer testimonials" link="/"/>
    </div>
  )
}

export default CustomizationPage