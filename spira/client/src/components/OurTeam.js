import React from 'react'
import './OurTeam.css'
import MemberCard from './MemberCard'
import { HashLink as Link } from 'react-router-hash-link'


function OurTeam() {

  const images = require.context('../images', true)
  let img;

  try{
    img= images('./stockholm1.jpg')
  }catch(err){
    console.log(err)
   
      img= images('./default_profile.png')
  
   
  }
 
  return (
    <div className='team-container'>
        <span className='team-header'>OUR TEAM</span>
        <p className='team-desc'>
             Our team of experienced professionals is passionate about creating engaging content and delivering effective digital marketing strategies that drive business growth.
            We use the latest technology and techniques to ensure that your brand stays relevant and competitive in today's fast-paced digital landscape.
            We are committed to providing our clients with exceptional service and delivering measurable results. 
            Let us help you take your brand to the next level.
            <br/><Link to="/#contact" smooth>Contact us</Link>  today to learn more about how we can help your business thrive.
        </p>
        <div className='team-cards-container'>
            <MemberCard name="Sidiki Daiwara" title="Creative Director" source={img}/>
            <MemberCard name="Evelina Goussi" title="Graphic Designer" source={images('./stockholm2.jpg')}/>
            <MemberCard name="Kevin Jabro" title="Marketor" source={images('./default_profile.png')}/>
        </div>
    </div>
  )
}

export default OurTeam