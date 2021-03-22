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
    if(!project) return <h2 className="text-center">Select a Project</h2>
    // Array destructuring para extraer el proyecto actual
    const [actualProject] = project;
    // Elimina un proyecto
    const handleDelete = () => {
        deleteProject(actualProject._id);
    }
    return ( 
        <>
        <h2 className="text-center">{actualProject.projectName}</h2>
        {projectTasks.length === 0 ? 
        (<h3 className="p-4">No tasks created</h3>) :
        <table className="table table-striped table-hover">
        <thead>
            <tr >
                <th className="text-center" style={{width: "70%"}}>Task Name</th>
                <th className="text-center" style={{width: "15%"}}>Status</th>
                <th className="text-center" style={{width: "15%"}}>Actions</th>
            </tr>
        </thead>
        <tbody>
        {projectTasks.map((task, index)=> (
                        <Task task={task} key={index} />
                    ))
                }
        </tbody>
        </table>
    
        }
        
        <button type="button" className="btn btn-danger btn-lg" onClick={handleDelete}>Delete Project &times;</button>
        </>
     );
}
 
export default TaskList;