import React from 'react'
import './styles/RecentWorksList.css'
import TeamSettingListCard from './TeamSettingListCard'

function TeamSettingList() {
  return (
    <div className='recent-settings-holder'>
    <span className='recent-settings-title'> Team Member List Edit Form</span>
    <TeamSettingListCard key="1" member_name="proj 1"  project_id={1} member_position="this is the desc of proj 1" member_image="image"/>  
     
</div>
  )
}

export default TeamSettingList