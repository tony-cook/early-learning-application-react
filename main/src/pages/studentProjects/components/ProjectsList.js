import React from 'react'
import '../StudentProjects.css';

function ProjectsList({projectsData}) {
    return (
        <div className="project-container">
            {projectsData.map((project,index) => (
                <div key={index} className="project-container-single">
                <img src={project.project_pic} alt=""></img>
                <div className="project-title">{project.name}</div>
                <br />
                <div className="project-info">{project.course} | {project.activity_type}</div>
                </div>
            ))}
        </div>
    )
}

export default ProjectsList
