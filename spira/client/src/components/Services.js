import React, { useEffect, useState } from 'react'
import './styles/Services.css'
import ServicesCard from './ServicesCard'
import axios from 'axios'

function Services() {

  const [services, setServices] = useState([]);

  useEffect(() =>{
    axios.get("/getServices")
    .then(res => {
      setServices(res.data);
    })
    .catch(error => {
      console.log(error);
    });
  },[])
  
  return (
    
    <div className='services-container' id='services'>
        <span className='services-title'>OUR SERVICES</span>
        {
        services.map((service)=>{
          return(
            <ServicesCard key={service.service_id} service_name={service.service_name} service_desc={service.service_description}/>
          )
          })
        }
    </div>
  )
}

export default Services