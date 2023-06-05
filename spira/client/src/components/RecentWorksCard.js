import React, { useState } from 'react'
import './styles/RecentWorksCard.css'

function RecentWorksCard({proj_title, proj_desc, imgName}) {
  const images = require.context('../images/projectBg', true)
  
  
  let imgUrl;
  try{
    if(imgName!==null) {
      imgUrl= images(`./${imgName}`)
    }else{
      imgUrl= images("./stockholm2.jpg")
    }
  }catch(error){
    imgUrl= images("./stockholm2.jpg")
  }
   

    const [cardStyle,updateCardStyle] = useState({ backgroundImage: `url(${imgUrl})` })
    const gradient = 'linear-gradient(to right, rgba(0, 0, 0, 0.729),rgba(0, 0, 0, 0.729), rgba(0, 0, 2, 0.52)),';

    const hoverEffect=()=>{
      updateCardStyle({ backgroundImage:  `${gradient}url('${imgUrl}')` })
    }

    const leaveEffect=()=>{
      updateCardStyle({ backgroundImage: `url(${imgUrl})` })
    }

  return (
    <>
   
      <div className='recent-card' style={cardStyle} onMouseEnter={hoverEffect} onMouseLeave={leaveEffect}>
          <div className='recent-card-desc'>
            <span className='recent-card-header'>{proj_title}</span>
            <span className='recent-card-text'>{proj_desc}</span>
          </div>
      </div>
    </>
  )
}

export default RecentWorksCard