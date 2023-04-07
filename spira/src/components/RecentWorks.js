import React from 'react'
import './RecentWorks.css'
import RecentWorksCard from './RecentWorksCard'

function RecentWorks() {
  return (
    <div className='recent-container'>
       <span>RECENT WORKS</span>
        <div className='work-list-container'>
            <RecentWorksCard/>
            <RecentWorksCard/>
            <RecentWorksCard/>
        </div>
    </div>
  )
}

export default RecentWorks