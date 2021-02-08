import React, {useContext, useEffect} from 'react'
import ProjectItem from './ProjectItem'
import ProjectContext from '../../context/projects/projectContext';

const ProjectList = () => {

    const contextProject = useContext(ProjectContext);
    const { projects, getProjects } =  contextProject;

    useEffect(() => {
        getProjects();
    }, [])

    if(projects.length === 0) return <p>No hay proyectos, comienza creando uno!</p>;  

    return ( 
        <ul className="listado-proyectos">
            {projects.map(project => 
                <ProjectItem project={project} key={project.id} />
            )}
        </ul>
     );    
}
 
export default ProjectList; 