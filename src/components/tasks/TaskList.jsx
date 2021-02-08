import React, { useContext } from 'react'
import Task from './Task';
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const TaskList = () => {
    // Extrar proyectos de state inicial
    const contextProject = useContext(ProjectContext);
    const { project, deleteProject } =  contextProject;
    // obtener las tareas del proyecto
    const contextTask = useContext(TaskContext);
    const { projectTasks } = contextTask;
    // Si no hay proyecto seleccionado
    if(!project) return <h2>Selecciona un proyecto</h2>
    // Array destructuring para extraer el proyecto actual
    const [actualProject] = project;
    // Elimina un proyecto
    const handleDelete = () => {
        deleteProject(actualProject.id);
    }
    return ( 
        <>
        <h2>Proyecto: {actualProject.projectName}</h2>

        <ul className="listado-tareas">
            {projectTasks.length === 0 
            ? (<li className="tarea"><p>No hay tareas</p></li>)
            :   projectTasks.map(task => (
                    <Task task={task} key={task.id} />
                ))
            }
        </ul>

        <button type="button" className="btn btn-eliminar" onClick={handleDelete}>Eliminar proyecto &times;</button>
        </>
     );
}
 
export default TaskList;