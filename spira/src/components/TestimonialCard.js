import React from 'react'

function TestimonialCard({source,testimonial,owner}) {
  return (
    <div className='testimonial-card'>
        <div className='testimonial-profile-holder'>
            <img className='testimonial-profile' src={source} alt='testimonial profile'/>
        </div>
        <div className='testimonial-text-holder'>
            <span className='testimonial-text'>"{testimonial}"</span>
            <span className='testimonial-owner'>- {owner}</span>
        </div>
    </div>
  )
}

export default TestimonialCard