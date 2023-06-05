import React, { useEffect, useState } from 'react'
import './styles/RecentWorksList.css'
import RecentWorksListCard from './RecentWorksListCard'
import axios from 'axios'
import NewProjectCard from './NewProjectCard'

function RecentWorksList() {
  const [newProject,setNewProject] = useState(false)
  const [newRender,setRender] = useState(false)

  const [projects, setProjects] = useState([]);

  const addProject = () => {
    setNewProject(true)
  }

  const closeNewProjectCard = () => {
    setNewProject(false);
  };

  useEffect(() =>{
    axios.get("/projects/getProjects")
    .then(res => {
      setProjects(res.data);
    })
    .catch(error => {
      console.log(error);
    });
  },[newProject,newRender])

  const updateList=() => {
    setRender(!newRender)
  }

  return (
    <div className='recent-settings-holder'>
    <span className='recent-settings-title'> Recent Works List Edit Form</span>

        {newProject?
        
        <NewProjectCard onClose={closeNewProjectCard}/>
        :
        <>
        <button className='service-setting-edit-btn' onClick={addProject}>Add new Project</button>
        {
        projects.map((project)=>{
          return(
          <RecentWorksListCard key={project.project_id} project_id={project.project_id}  project_title={project.project_title}    project_description={project.project_description}  update={updateList}/>  
          )
          })
        }
        </>
        }
        

    </div>
  )
}

export default RecentWorksList