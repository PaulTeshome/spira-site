import React from 'react'
import './styles/RecentWorksCard.css'

function RecentWorksCard({proj_title, proj_desc, imgName}) {
  const images = require.context('../images', true)
  let img;
    if(imgName!==null) {
      img= images(imgName)
      console.log(imgName)
    }
    else{
      console.log("f",imgName)
      
      img= images("./stockholm2.jpg")
    }
    

  return (
    <>
      <style>
          {
            `
            .recent-card{
              background-image: url('${img}');
            }

            .recent-card:hover{
              transform: scale(1.04,1.04);
              background-image:  linear-gradient(to right, rgba(0, 0, 0, 0.729),rgba(0, 0, 0, 0.729), rgba(0, 0, 2, 0.52)), url('${img}');
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