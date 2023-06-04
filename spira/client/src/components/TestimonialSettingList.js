import React from 'react'
import './styles/ServicesListSetting.css'
import TestimonailSettingListCard from './TestimonialSettingListCard'

function TestimonailSettingList() {
  return (
    <div className='services-settings-holder'>
        <span className='services-settings-title'> Testimonials List Edit Form</span>
        <TestimonailSettingListCard testimonial_id={"2"}   testimonial_owner="name one" testimonial_text="desc one"/>

    </div>
  )
}

export default TestimonailSettingList