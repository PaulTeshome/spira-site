import React from 'react'
import TestimonialCard from './TestimonialCard'
import './AboutUs.css'
import illust4 from '../images/about us illustration.svg'
import profile from '../images/default_profile.png'

function AboutUs() {
  return (
    <div className='aboutUs-container' id="abtUs">
              <span className='aboutUs-title'>ABOUT US</span>

              <div className='aboutUs-desc'>
                  <div className="aboutUs-description">
                      <span >Welcome to Spira, your go-to digital marketing agency for all your social
                        media and accounting management needs. We specialize in content creation, 
                        marketing, and graphic design to help your brand stand out in the digital 
                        world.<br/><br/>
                        At Spira, our mission is to provide personalized and results-driven 
                        solutions to help our clients achieve their business goals. We believe in
                        building strong relationships with our clients and working closely with 
                        them to understand their unique needs and challenges.</span>
                  </div>
                  <div className='aboutUs-illust'>
                      <img id='illust4' src={illust4} alt='about us illustration'/>
                  </div>
              </div>

              <div className='aboutUs-testimonials'>
                <div className='testimonials-scroller'>
                  <TestimonialCard source={profile} testimonial="Best marketing agency to work with. Amazing services
                  Best marketing agency to work with. Amazing services
                  Best marketing agency to work with. Amazing services
                  Best marketing agency to work with. Amazing services
                  Best marketing agency to work with. Amazing services" owner="unknown1"/>
                  <TestimonialCard source={profile} testimonial="Best marketing agency to work with. Amazing services" owner="unknown2"/>
                  <TestimonialCard source={profile} testimonial="Best marketing agency to work with. Amazing services" owner="unknown3"/>
                  <TestimonialCard source={profile} testimonial="Best marketing agency to work with. Amazing services" owner="unknown4"/>
                </div>
                <button className='last-hire-btn'>Hire Us</button>
              </div>
             
           </div>
  )
}

export default AboutUs
