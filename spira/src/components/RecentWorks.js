import React from 'react'
import './RecentWorks.css'
import RecentWorksCard from './RecentWorksCard'

function RecentWorks() {
  return (
    <div className='recent-container'>
       <h1>RECENT WORKS</h1>
        <div className='work-list-container'>
            <RecentWorksCard/>
            <RecentWorksCard/>
            <RecentWorksCard/>
        </div>
    </div>
  )
}

export default RecentWorks