import React from 'react'

function MemberCard({name,title,source}) {
  return (
    <div className='member-card'>
        <div className='member-profile-holder'>
            <img className='member-profile' src={source} alt='member profile'/>
        </div>
        <span className='member-name'>{name}</span>
        <span className='member-title'>{title}</span>
    </div>
  )
}

export default MemberCard