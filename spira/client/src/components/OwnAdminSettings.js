import React, { useEffect, useState } from 'react'
import './styles/ServicesListSetting.css'
import OwnAdminSettingCard from './OwnAdminSettingCard'
import axios from 'axios'
function OwnAdminSettings({userId}) {

    const [admin, setAdmin] = useState([]);

    useEffect(() =>{
       
        axios.get("/admin/getAdmin")
        .then(res => {
          setAdmin(res.data);
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
            <OwnAdminSettingCard key={adm.admin_id} userId={userId} admin_id={adm.admin_id} admin_username={adm.admin_username} admin_email={adm.admin_email} />
          )
          })
        }
       
        

    </div>
  )
}

export default OwnAdminSettings