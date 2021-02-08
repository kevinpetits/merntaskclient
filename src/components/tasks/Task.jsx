import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const Task = ({task}) => {
    // Extrar si un proyecto esta activo
    const contextProject = useContext(ProjectContext);
    const { project } =  contextProject;
    // obtener la función del context de tarea
    const contextTask = useContext(TaskContext);
    const { deleteTask, getTasksByProject, changeTaskStatus, actualTask } = contextTask;
    // Extraer el proyecto
    const [actualProject] = project;
    // Función que se ejecuta cuando el usuario presiona el btn de eliminar tarea
    const handleDeleteTask = (id) => {
        deleteTask(id);
        getTasksByProject(actualProject.id);
    }
    // Función que modifica el estado de las tareas
    const handleTaskStatus = task => {
        if(task.status){
            task.status = false;
        } else {
            task.status = true;
        }
        changeTaskStatus(task);
    }
    // Agrega una tarea actual cuando el usuario desea editarla
    const selectTask = task => {
        actualTask(task);
    }
    return ( 
        <li className="tarea sombra">
            <p>{task.taskName}</p>

            <div className="estado">
                {task.status 
                ? (<button type="button" className="completo" onClick={() => handleTaskStatus(task)}>Completo</button>)
                : (<button type="button" className="incompleto" onClick={() => handleTaskStatus(task)}>Incompleto</button>)
                }
            </div>

            <div className="acciones">
                <button type="button" className="btn btn-primario" onClick={() => selectTask(task)}>
                    Editar
                </button>
                <button type="button" className="btn btn-secundario" onClick={() => handleDeleteTask(task.id)}>
                    Eliminar
                </button>
            </div>
        </li>
     );
}
 
export default Task;