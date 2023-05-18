import React from 'react'
import './styles/ServicesListSetting.css'
import ServicesSettingCard from './ServicesSettingCard'

function ServicesListSetting() {
  return (
    <div className='services-settings-holder'>
        <span className='services-settings-title'> Services List Edit Form</span>
        <ServicesSettingCard service_id={"2"}   service_name="name one" service_description="desc one"/>

    </div>
  )
}

export default ServicesListSetting