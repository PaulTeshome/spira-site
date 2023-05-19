import React from 'react'
import './styles/RecentWorksList.css'
import RecentWorksListCard from './RecentWorksListCard'

function RecentWorksList() {
  return (
    <div className='recent-settings-holder'>
    <span className='recent-settings-title'> Recent Works List Edit Form</span>
    <RecentWorksListCard project_title="proj 1"  project_id={1} project_description="this is the desc of proj 1" project_image="image"/>  
    <RecentWorksListCard project_title="proj 1"  project_id={1} project_description="this is the desc of proj 1" project_image="image"/>  

</div>
  )
}

export default RecentWorksList