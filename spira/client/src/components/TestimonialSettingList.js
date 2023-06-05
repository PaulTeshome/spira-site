import React, { useEffect, useState } from 'react'
import './styles/ServicesListSetting.css'
import TestimonailSettingListCard from './TestimonialSettingListCard'
import axios from 'axios'
import NewTestimonialCard from './NewTestimonialCard'

function TestimonailSettingList() {
  const [newTestimonial,setNewTestimonial] = useState(false)
  const [newRender,setRender] = useState(false)

  const [testimonials, setTestimonials] = useState([]);

  const addTestimonial = () => {
    setNewTestimonial(true)
  }

  const closeNewTestimonialCard = () => {
    setNewTestimonial(false);
  };

  useEffect(() =>{
    axios.get("/testimonials/getTestimonials")
    .then(res => {
      setTestimonials(res.data);
    })
    .catch(error => {
      console.log(error);
    });
  },[newTestimonial,newRender])

  const updateList=() => {
    setRender(!newRender)
  }
  return (
    <div className='services-settings-holder'>
        <span className='services-settings-title'> Testimonials List Edit Form</span> 
        {newTestimonial?
        
        <NewTestimonialCard onClose={closeNewTestimonialCard}/>
        :
        <>
        <button className='service-setting-edit-btn' onClick={addTestimonial}>Add new Testimonial</button>
        {
        testimonials.map(testimonial =>{
          return (
           <TestimonailSettingListCard key={testimonial.testimonial_id} update={updateList} testimonial_id={testimonial.testimonial_id} testimonial_text={testimonial.testimonial_text} testimonial_owner={testimonial.testimonial_owner}/>
          )
        })
        }
        </>
        }

    </div>
  )
}

export default TestimonailSettingList