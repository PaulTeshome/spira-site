import React, { useEffect, useState } from 'react'
import './styles/ServicesListSetting.css'
import AdminSettingCard from './AdminSettingCard'
import NewAdminCard from './NewAdminCard'
import axios from 'axios'

function OtherAdminSettings({userId}) {
  const [newAdmin,setNewAdmin] = useState(false)
  const [newRender,setRender] = useState(false)
  const [emptyMsg,setEmptyMsg] = useState("")

  const [admins, setAdmins] = useState([]);

  const addAdmin = () => {
    setNewAdmin(true);
  }

  const closeNewAdminCard = () => {
    setNewAdmin(false);
  };

  

  useEffect(() =>{
    const params = {
      id: userId,
    };

    axios.get("/admin/getAllAdmins",{params})
    .then(res => {
      setAdmins(res.data);
    })
    .catch(error => {

      setAdmins([]);
      setEmptyMsg(error.response.data.message)
    });
  },[newAdmin,newRender, userId])

  const updateList=() => {
    setRender(!newRender)
  }

  return (
    <div className='services-settings-holder'>
        <span className='services-settings-title'> Add/Remove Admin Form</span>
        {newAdmin?
        
        <NewAdminCard onClose={closeNewAdminCard}/>
        :
        <>
        <button className='service-setting-edit-btn' onClick={addAdmin}>Add new Admin</button>
        {
        admins.map((admin)=>{
          return(
            <AdminSettingCard key={admin.admin_id} admin_id={admin.admin_id} admin_username={admin.admin_username} update={updateList}/>
          )
          })
         
        }
        </>
        }
        <span className='empty-data-msg'>
          {
            !newAdmin?
            emptyMsg:
            <></>
          }
        </span>
    </div>
  )
}

export default OtherAdminSettings