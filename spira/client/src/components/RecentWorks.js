import React, { useEffect, useState } from 'react'
import './styles/RecentWorks.css'
import RecentWorksCard from './RecentWorksCard'
import axios from 'axios';

function RecentWorks() {

  const [projects, setProjects] = useState([])
  useEffect(() =>{
    axios.get("/getProjects")
    .then(res => {
      setProjects(res.data);
    })
    .catch(error => {
      console.log(error);
    });
  },[])

  return (
    <div className='recent-container'>
       <span>RECENT WORKS</span>
        <div className='work-list-container'>
            {
              projects.map(project =>{
                return (
                  <RecentWorksCard key={project.project_id} proj_title={project.project_title} proj_desc={project.project_description} imgName={project.project_image}/>
                )
              })
            }
        </div>
    </div>
  )
}

export default RecentWorks