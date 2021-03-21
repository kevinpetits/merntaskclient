import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const ProjectItem = ({project}) => {
    // Obtener el state de proyectos
    const contextProject = useContext(ProjectContext);
    const { actualProject } =  contextProject;
    // obtener la función del context de tarea
    const contextTask = useContext(TaskContext);
    const { getTasksByProject } = contextTask;
    // Función para agregar el proyecto actual
    
    const handleClick = (id) => {
        actualProject(id);  // Fijar un proyecto actual
        getTasksByProject(id); // Filtrar las tareas cuando se de click
    }

    return ( 
        <li className="nav-item ">
              <a className="nav-link" onClick={() => handleClick(project._id)} href="#!">
              <i className="material-icons">library_books</i>
                <p>{project.projectName}</p>
              </a>
        </li>
        // <li>
        //     <button type="button" className="btn btn-blank" onClick={() => handleClick(project._id)}>
        //         {project.projectName}
        //     </button>
        // </li>
     );
}
 
export default ProjectItem;