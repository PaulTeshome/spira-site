import React from 'react'

function MemberCard({id,name,title,imgName}) {
  const images = require.context('../images', true)

  let imgUrl;
    if(imgName!==null) {
      // console.log("is not null")
      imgUrl= images(`./${imgName}`)
    }else{
      imgUrl= images("./default_profile.png")
    }
  return (
    <div className='member-card'>
        <div className='member-profile-holder'>
            <img className='member-profile' src={imgUrl} alt='member profile'/>
        </div>
        <span className='member-name'>{name}</span>
        <span className='member-title'>{title}</span>
    </div>
  )
}

export default MemberCard