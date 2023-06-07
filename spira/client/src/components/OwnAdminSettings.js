import React, { useEffect, useState } from 'react'
import './styles/ServicesListSetting.css'
import OwnAdminSettingCard from './OwnAdminSettingCard'
import axios from 'axios'
function OwnAdminSettings() {

    const [admin, setAdmin] = useState([]);
    const [user,setUser]= useState('')

    useEffect(() =>{
        axios.get('/auth/check-login')
        .then(response => {
            setUser(response.data.user.username)

        })

        //axios
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
            <OwnAdminSettingCard key={service.service_id} service_id={service.service_id} service_name={service.service_name} service_description={service.service_description} update={updateList}/>
          )
          })
        }
       
        

    </div>
  )
}

export default OwnAdminSettings