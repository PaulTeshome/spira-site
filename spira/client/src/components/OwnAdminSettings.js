import React, { useEffect, useState } from 'react'
import './styles/ServicesListSetting.css'
import OwnAdminSettingCard from './OwnAdminSettingCard'
import axios from 'axios'
function OwnAdminSettings() {

    const [admin, setAdmin] = useState([]);

    useEffect(() =>{
       
        axios.get("/admin/getAdmin")
        .then(res => {
          setAdmin(res.data);
          console.log("get admin res: " + res.data[0])
        })
        .catch(error => {
          console.log(error);
        });
      },[])

  return (
    <div className='services-settings-holder'>
        <span className='services-settings-title'> Own credentials Form</span>
        
        {
         admin.map((adm)=>{
          return(
            <OwnAdminSettingCard key={adm.admin_id} admin_id={adm.admin_id} admin_username={adm.admin_username} />
          )
          })
        }
       
        

    </div>
  )
}

export default OwnAdminSettings