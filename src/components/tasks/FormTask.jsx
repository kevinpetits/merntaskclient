import React, { useContext, useState, useEffect } from 'react';
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const FormTask = () => {

    const contextProject = useContext(ProjectContext);
    const { project } =  contextProject;

    const contextTask = useContext(TaskContext);
    const { selectedTask, taskError, addTaskToProject, validateTask, getTasksByProject, updateTask } = contextTask;

    useEffect(() => {
        if(selectedTask !== null){
            setTask(selectedTask)
        } else {
            setTask({
                taskName: ''
            })
        }
    }, [selectedTask])

    const [task, setTask] = useState({
        taskName: ''
    })

    const {taskName} = task;

    if(!project) return null;

    const [actualProject] = project;

    const handleChange = (event) => {
        setTask({
            ...task,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(taskName.trim() === ''){
            validateTask();
            return;
        }
        if(selectedTask === null) {
            task.projectId = actualProject.id;
            task.status = false;
            addTaskToProject(task);
        } else {
            updateTask(task);
        }
        getTasksByProject(actualProject.id);
        setTask({
            taskName: ''
        });
        
    }

    return ( 
        <div className="formulario" >
            <form onSubmit={handleSubmit}>
                <div className="contenedor-input">
                    <input type="text" className="input-text" placeholder="Nombre de la tarea..." name="taskName" value={taskName} onChange={handleChange} />
                </div>
                <div className="contenedor-input">
                    <input type="submit" className="btn btn-block btn-primario" value={selectedTask ? 'Modificar tarea' : 'Agregar tarea'} />
                </div>
            </form>

            {taskError ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
     );
}
 
export default FormTask;