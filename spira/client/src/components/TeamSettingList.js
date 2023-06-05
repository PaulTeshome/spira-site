import React, { useEffect, useState } from 'react'
import './styles/RecentWorksList.css'
import axios from 'axios'
import NewMemberCard from './NewMemberCard'
import TeamSettingListCard from './TeamSettingListCard'

function TeamSettingList() {
  const [newMember,setNewMember] = useState(false)
  const [newRender,setRender] = useState(false)

  const [members, setMembers] = useState([]);

  const addMember = () => {
    setNewMember(true)
  }

  const closeNewMemberCard = () => {
    setNewMember(false);
  };

  useEffect(() =>{
    axios.get("/team/getMembers")
    .then(res => {
      setMembers(res.data);
    })
    .catch(error => {
      console.log(error);
    });
  },[newMember,newRender])

  const updateList=() => {
    setRender(!newRender)
  }

  return (
    <div className='recent-settings-holder'>
    <span className='recent-settings-title'> Team Member List Edit Form</span>
        {newMember?
        
        <NewMemberCard onClose={closeNewMemberCard}/>
        :
        <>
        <button className='service-setting-edit-btn' onClick={addMember}>Add new Member</button>
        {
        members.map((member)=>{
          return(
            <TeamSettingListCard key={member.member_id} member_id={member.member_id}  member_name={member.member_name}  old_image={member.member_image}  member_position={member.member_position}  update={updateList}/>  
          )
          })
        }
        </>
        }
        

    </div>
  )
}

export default TeamSettingList