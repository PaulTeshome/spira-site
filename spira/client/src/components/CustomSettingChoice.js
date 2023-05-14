import React from 'react'
import SettingCard from './SettingCard'
import './CustomSettingChoice.css'

function CustomSettingChoice() {
  return (
    <div className='custom-setting-holder'>        
    <SettingCard title="General Page Elements" desc="Edit elements like email, phone numbers, location of company, introduction motto..." link="*/generalpage"/>
    <SettingCard title="Our Services list" desc="Add, edit or remove the services listed in the OUR SERVICES section of the website" link="*/servicessetting"/>
    <SettingCard title="Recent Works list" desc="Add,edit or remove the recent projects listed in the RECENT WORKS section of the website" link="/"/>
    <SettingCard title="Team Member" desc="Add, edit or remove team member information listed in the OUR TEAM section of the website" link="/"/>
    <SettingCard title="Testimonials" desc="Add, edit or remove customer testimonials" link="/"/>
    </div>
  )
}

export default CustomSettingChoice