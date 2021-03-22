import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const Task = ({task}) => {
    // Extrar si un proyecto esta activo
    const contextProject = useContext(ProjectContext);
    const { project } =  contextProject;
    // obtener la función del context de tarea
    const contextTask = useContext(TaskContext);
    const { deleteTask, getTasksByProject, updateTask, actualTask } = contextTask;
    // Extraer el proyecto
    const [actualProject] = project;
    // Función que se ejecuta cuando el usuario presiona el btn de eliminar tarea
    const handleDeleteTask = (id) => {
        deleteTask(id, actualProject._id);
        getTasksByProject(actualProject._id);
    }
    // Función que modifica el estado de las tareas
    const handleTaskStatus = task => {
        if(task.status){
            task.status = false;
        } else {
            task.status = true;
        }
        updateTask(task);
    }
    // Agrega una tarea actual cuando el usuario desea editarla
    const selectTask = task => {
        actualTask(task);
    }
    return ( 
        <tr>
            <td className="text-center" style={{overflow: "auto", whiteSpace: "nowrap", wordBreak: "break-all", maxWidth: "800px"}}>{task.taskName}</td>
            <td className="text-center">{task.status 
                 ? (<button type="button" className="btn btn-success btn-block btn-sm" onClick={() => handleTaskStatus(task)}>Completed</button>)
                 : (<button type="button" className="btn btn-danger btn-block btn-sm" onClick={() => handleTaskStatus(task)}>Incompleted</button>)
                 }</td>

            <td className="td-actions text-center">
                <button type="button" rel="tooltip" className="btn btn-warning btn-lg m-1" onClick={() => selectTask(task)}>
                    <i className="material-icons">edit</i>
                </button>
                <button type="button" rel="tooltip" className="btn btn-danger btn-lg m-1" onClick={() => handleDeleteTask(task._id)}>
                    <i className="material-icons">close</i>
                </button>
            </td>
        </tr>
     );
}
 
export default Task;