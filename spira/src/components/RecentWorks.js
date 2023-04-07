import React from 'react'
import './RecentWorks.css'
import RecentWorksCard from './RecentWorksCard'

function RecentWorks() {
  return (
    <div className='recent-container'>
       <span>RECENT WORKS</span>
        <div className='work-list-container'>
            <RecentWorksCard proj_title="Project 1" proj_desc=" this is the proj description"/>
            <RecentWorksCard proj_title="Project 2" proj_desc=" this is the proj description"/>
            <RecentWorksCard proj_title="Project 3" proj_desc=" this is the proj description"/>
        </div>
    </div>
  )
}

export default RecentWorks