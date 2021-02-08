import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const Task = ({task}) => {

    const contextProject = useContext(ProjectContext);
    const { project } =  contextProject;

    const contextTask = useContext(TaskContext);
    const { deleteTask, getTasksByProject } = contextTask;

    const [actualProject] = project;

    const HandleDeleteTask = (id) => {
        deleteTask(id);
        getTasksByProject(actualProject.id);
    }

    return ( 
        <li className="tarea sombra">
            <p>{task.taskName}</p>

            <div className="estado">
                {task.status 
                ? (<button type="button" className="completo">Completo</button>)
                : (<button type="button" className="incompleto">Incompleto</button>)
                }
            </div>

            <div className="acciones">
                <button type="button" className="btn btn-primario">
                    Editar
                </button>
                <button type="button" className="btn btn-secundario" onClick={() => HandleDeleteTask(task.id)}>
                    Eliminar
                </button>
            </div>
        </li>
     );
}
 
export default Task;