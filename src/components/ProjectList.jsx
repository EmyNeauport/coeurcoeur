import { useState, useEffect } from "react"
import Project from "./Project"
import projectsData from "../../data-project.json"

import '../assets/styles/ProjectList.scss'


function ProjectList() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
      setProjects(projectsData)
    }, [])
  
    return (
      <div className="project-list">
        {projects.map((project) => (
          <Project
            image={project.image}
            title={project.title}
            text={project.text}
            link={project.link}
          />
        ))}
      </div>
    )
  }

export default ProjectList