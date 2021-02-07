import React from 'react'
import ProjectItem from './ProjectItem'


const ProjectList = () => {

    const projects = [
        {projectName: 'Tienda Virtual', id: 1},
        {projectName: 'MERN Ecommerce', id: 2},
        {projectName: 'MERN Facebook', id: 3},
        {projectName: 'MERN Twitter', id: 4},
        {projectName: 'MERN Youtube', id: 5},
        {projectName: 'MERN Project Manager', id: 6},
        {projectName: 'MERN IDK', id: 7},
    ]

    return ( 
        <ul className="listado-proyectos">
            {projects.map(project => 
                <ProjectItem project={project} key={project.id} />
            )}
        </ul>
     );    
}
 
export default ProjectList; 