import React, { useEffect, useState } from 'react'
import './styles/ServicesListSetting.css'
import ServicesSettingCard from './ServicesSettingCard'
import NewServiceCard from './NewServiceCard'
import axios from 'axios'

function ServicesListSetting() {
  const [newService,setNewService] = useState(false)
  const [services, setServices] = useState([]);

  const addService = () => {
    setNewService(true)
  }

  const closeNewServiceCard = () => {
    setNewService(false);
  };

  useEffect(() =>{
    axios.get("/services/getServices")
    .then(res => {
      setServices(res.data);
    })
    .catch(error => {
      console.log(error);
    });
  },[])

  return (
    <div className='services-settings-holder'>
        <span className='services-settings-title'> Services List Edit Form</span>
        {newService?
        
        <NewServiceCard onClose={closeNewServiceCard}/>
        :
        <>
        <button className='service-setting-edit-btn' onClick={addService}>Add new Service</button>
        {
        services.map((service)=>{
          return(
            <ServicesSettingCard key={service.service_id} service_id={service.service_id} service_name={service.service_name} service_description={service.service_description}/>
          )
          })
        }
        </>
        }
        

    </div>
  )
}

export default ServicesListSetting