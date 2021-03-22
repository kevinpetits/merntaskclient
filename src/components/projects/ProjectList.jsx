import React, {useContext, useEffect} from 'react'
import ProjectItem from './ProjectItem'
import ProjectContext from '../../context/projects/projectContext';
import AlertContext from '../../context/alerts/alertContext';

const ProjectList = () => {

    // Extrar proyectos de state inicial
    const contextProject = useContext(ProjectContext);
    const { message, projects, getProjects } =  contextProject;

    //Extracting values from context
    const alertContext = useContext(AlertContext);
    const {alert, showAlert} = alertContext;
    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        if(message){
            showAlert(message.msg, message.category);
        }
        getProjects();
        // eslint-disable-next-line
    }, [message])
    // revisar si proyectos tiene contenido
    if(projects.length === 0) return <h3 className="text-center">No projects yet, start creating one!</h3>;  
    return (
        <>
        <h3 className="text-center">Your Projects</h3> 
        <ul className="nav">
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
                {projects.map(project => 
                        <ProjectItem project={project} key={project._id}   />
                )}
        </ul>
        </>
     );    
}
 
export default ProjectList; 