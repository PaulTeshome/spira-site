import React from 'react'

function ServicesCard({service_name:name,service_desc:desc}) {
  return (
    <div>
        <div className='services-card'>
            <span className='services-name'>{name}</span>
            <button className='dropdown-btn'></button>
        </div>
        <div className='services-desc-card'>
        its desc {desc}
        </div>
    </div>
  
  )
}

export default ServicesCard