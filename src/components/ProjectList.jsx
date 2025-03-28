import { useState, useEffect } from "react"
import Project from "./Project"
import projectsData from "../../data-project.json"

import '../assets/styles/ProjectList.scss'

import booki from '../assets/Booki.png'
import kasa from '../assets/Kasa.png'

const imageMap = {
  "Booki.png": booki,
  "Kasa.png": kasa
}

function ProjectList() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
      setProjects(projectsData)
    }, [])
  
    return (
      <div className="project-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            image={imageMap[project.image]}
            alt={project.alt}
            title={project.title}
            text={project.text}
            brief={project.brief}
            mission={project.mission}
            link={project.link}
          />
        ))}
      </div>
    )
  }

export default ProjectList