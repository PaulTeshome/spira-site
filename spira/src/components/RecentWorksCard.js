import React from 'react'
import './RecentWorksCard.css'

function RecentWorksCard({proj_title, proj_desc}) {
  return (
    <div className='recent-card'>
        <div className='recent-card-desc'>
          <span className='recent-card-header'>{proj_title}</span>
          <span className='recent-card-text'>{proj_desc}</span>
        </div>
    </div>
  )
}

export default RecentWorksCard