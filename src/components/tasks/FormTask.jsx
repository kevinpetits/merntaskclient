import React, { useContext, useState, useEffect } from 'react';
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const FormTask = () => {
     // Extrae desde el context si un proyecto esta activo
    const contextProject = useContext(ProjectContext);
    const { project } =  contextProject;
    // obtener la función del context de tarea
    const contextTask = useContext(TaskContext);
    const { selectedTask, taskError, addTaskToProject, validateTask, getTasksByProject, updateTask } = contextTask;
    // Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if(selectedTask !== null){
            setTask(selectedTask)
        } else {
            setTask({
                taskName: ''
            })
        }
    }, [selectedTask])
    // State del formulario
    const [task, setTask] = useState({
        taskName: ''
    })
    // extrae el nombre del proyecto
    const {taskName} = task;
    // Si no hay proyecto seleccionado
    if(!project) return null;
     // Array destructuring para extraer el proyecto actual
    const [actualProject] = project;
    // Leer los valores del formulario
    const handleChange = (event) => {
        setTask({
            ...task,
            [event.target.name] : event.target.value
        })
    }
    // Actualizamos o añadimos una nueva tarea
    const handleSubmit = (event) => {
        event.preventDefault();
        // validar
        if(taskName.trim() === ''){
            validateTask();
            return;
        }
        // Si es edición o si es nueva tarea
        if(selectedTask === null) {
            // agregar la nueva tarea al state de tareas
            task.projectId = actualProject._id;
            addTaskToProject(task);
        } else {
            // actualizar tarea existente
            updateTask(task);
        }
        // Obtener y filtrar las tareas del proyecto actual
        getTasksByProject(actualProject._id);
         // reiniciar el form
        setTask({
            taskName: ''
        });
    }

    return ( 
        <div className="container-fluid" >
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Task name..." name="taskName" value={taskName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-block btn-primary btn-lg" value={selectedTask ? 'Update Task' : 'Add Task'} />
                </div>
            </form>

            {taskError ? <div className="alert alert-danger" role="alert">
            Task name is required!
            </div>: null}
        </div>
     );
}
 
export default FormTask;