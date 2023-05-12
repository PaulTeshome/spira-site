import React from 'react'
import './RecentWorksCard.css'

function RecentWorksCard({proj_title, proj_desc}) {
  const images = require.context('../images', true)

  return (
    <>
      <style>
          {
            `
            .recent-card{
              background-image: url('${images('./stockholm2.jpg')}');
            }

            .recent-card:hover{
              transform: scale(1.04,1.04);
              background-image:  linear-gradient(to right, rgba(6, 16, 32, 0.729),rgba(6, 16, 32, 0.729), rgba(0, 0, 2, 0.52)), url('${images('./stockholm2.jpg')}');
            } 
            `
            }
          </style>
      <div className='recent-card'>
          <div className='recent-card-desc'>
            <span className='recent-card-header'>{proj_title}</span>
            <span className='recent-card-text'>{proj_desc}</span>
          </div>
      </div>
    </>
  )
}

export default RecentWorksCard