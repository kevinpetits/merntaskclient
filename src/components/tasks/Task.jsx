import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const Task = ({task}) => {

    const contextProject = useContext(ProjectContext);
    const { project } =  contextProject;

    const contextTask = useContext(TaskContext);
    const { deleteTask, getTasksByProject, changeTaskStatus, actualTask } = contextTask;

    const [actualProject] = project;

    const handleDeleteTask = (id) => {
        deleteTask(id);
        getTasksByProject(actualProject.id);
    }

    const handleTaskStatus = task => {
        if(task.status){
            task.status = false;
        } else {
            task.status = true;
        }
        changeTaskStatus(task);
    }

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