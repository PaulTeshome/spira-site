import React, { useEffect, useState } from 'react'
import './styles/OurTeam.css'
import MemberCard from './MemberCard'
import { HashLink as Link } from 'react-router-hash-link'
import axios from 'axios'


function OurTeam() {

  const [members, setMembers] = useState([])
  useEffect(() =>{
    axios.get("/team/getMembers")
    .then(res => {
      setMembers(res.data);
    })
    .catch(error => {
      console.log(error);
    });
  },[])
 
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
          {
            members.map(member=>{
              return(
               <MemberCard key={member.member_id} id={member.member_id}  name={member.member_name} title={member.member_position} imgName={member.member_image}/>
              )
            })
          }
        </div>
    </div>
  )
}

export default OurTeam