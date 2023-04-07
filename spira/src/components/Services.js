import React from 'react'
import './Services.css'
import ServicesCard from './ServicesCard'

function Services() {
  return (
    // services.map((service)=>{
    //     <ServicesCard service_name={service.name}service_desc="we manage social media"/>
    // })
    <div className='services-container'>
        <h1>OUR SERVICES</h1>
        <ServicesCard service_name="SOCIAL MEDIA MANAGMENT" service_desc="we manage social media"/>
        <ServicesCard service_name="SOCIAL MEDIA MANAGMENT" service_desc="we manage social media"/>
    </div>
  )
}

export default Services