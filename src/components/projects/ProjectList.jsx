import React, {useContext, useEffect} from 'react'
import ProjectItem from './ProjectItem'
import projectContext from '../../context/projects/projectContext';

const ProjectList = () => {

    const contextProject = useContext(projectContext);
    const { projects, getProjects } =  contextProject;

    useEffect(() => {
        getProjects();
    }, [])

    if(projects.length === 0) return null;  

    return ( 
        <ul className="listado-proyectos">
            {projects.map(project => 
                <ProjectItem project={project} key={project.id} />
            )}
        </ul>
     );    
}
 
export default ProjectList; 