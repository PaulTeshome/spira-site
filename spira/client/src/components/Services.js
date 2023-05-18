import React from 'react'
import './styles/Services.css'
import ServicesCard from './ServicesCard'

function Services() {
  return (
    // services.map((service)=>{
    //     <ServicesCard service_name={service.name} service_desc={service.description}/>
    // })
    <div className='services-container' id='services'>
        <span className='services-title'>OUR SERVICES</span>
        <ServicesCard service_name="SOCIAL MEDIA MANAGMENT" service_desc="we manage social media"/>
        <ServicesCard service_name="SOCIAL MEDIA MANAGMENT" service_desc="we manage social media"/>
        <ServicesCard service_name="SOCIAL MEDIA MANAGMENT" service_desc="we manage social media"/>
        <ServicesCard service_name="SOCIAL MEDIA MANAGMENT" service_desc="we manage social media"/>
        <ServicesCard service_name="SOCIAL MEDIA MANAGMENT" service_desc="we manage social media"/>
    </div>
  )
}

export default Services