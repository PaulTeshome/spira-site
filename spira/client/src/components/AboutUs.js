import React, { useEffect, useState } from 'react'
import TestimonialCard from './TestimonialCard'
import illust4 from '../images/about us illustration.svg'
import profile from '../images/default_profile.png'
import { HashLink as Link } from 'react-router-hash-link'
import './styles/AboutUs.css'
import axios from 'axios'

function AboutUs() {

  const [aboutTxt,setAboutTxt]= useState([]);
  const [testimonials, setTestimonials] = useState([]);
  useEffect(()=>{

    axios.get("/general/getAbout")
    .then(res => {
     setAboutTxt(res.data[0].comp_abt)
    })
    .catch(error => {
      console.log(error);
    });

    axios.get("/testimonials/getTestimonials")
    .then(res => {
     setTestimonials(res.data)
    })
    .catch(error => {
      console.log(error);
    });
    
  },[])
  
  return (
    <div className='aboutUs-container' id="abtUs">
              <span className='aboutUs-title'>ABOUT US</span>

              <div className='aboutUs-desc'>
                  <div className="aboutUs-description">
                      <span >{aboutTxt}</span>
                  </div>
                  <div className='aboutUs-illust'>
                      <img id='illust4' src={illust4} alt='about us illustration'/>
                  </div>
              </div>

              <div className='aboutUs-testimonials'>
                <div className='testimonials-scroller'>
                  {
                    testimonials.map(testimonial =>{
                      return (
                       <TestimonialCard source={profile} testimonial={testimonial.testimonial_text} owner={testimonial.testimonial_owner}/>
                      )
                    })
                  }
                </div>
                <Link className='last-hire-btn' to="/hireUs#top">Hire Us</Link>
              </div>
             
           </div>
  )
}

export default AboutUs
