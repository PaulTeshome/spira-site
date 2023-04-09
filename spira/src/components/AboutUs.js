import React from 'react'
import './AboutUs.css'
import illust4 from '../images/about us illustration.svg'

function AboutUs() {
  return (
    <div className='aboutUs-container'>
              <span className='aboutUs-title'>ABOUT US</span>

              <div className='aboutUs-desc'>
                  <div className="aboutUs-description" id="abtUs">
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

              <div className='testimonials'>

              </div>
             
           </div>
  )
}

export default AboutUs
