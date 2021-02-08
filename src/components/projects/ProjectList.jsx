import React, {useContext, useEffect} from 'react'
import ProjectItem from './ProjectItem'
import ProjectContext from '../../context/projects/projectContext';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const ProjectList = () => {
    // Extrar proyectos de state inicial
    const contextProject = useContext(ProjectContext);
    const { projects, getProjects } =  contextProject;
    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        getProjects();
        // eslint-disable-next-line
    }, [])
    // revisar si proyectos tiene contenido
    if(projects.length === 0) return <p>No hay proyectos, comienza creando uno!</p>;  
    return ( 
        <ul className="listado-proyectos">
                {projects.map(project => 
                        <ProjectItem project={project} key={project.id}   />
                )}
        </ul>
     );    
}
 
export default ProjectList; 