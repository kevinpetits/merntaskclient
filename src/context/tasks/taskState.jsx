import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {PROJECT_TASKS, ADD_TASK, VALIDATE_TASK, DELETE_TASK, ACTUAL_TASK, UPDATE_TASK} from './../../types';
import clientAxios from '../../config/axios';

const TaskState = props => {
    const initialState = {
        projectTasks: [],
        taskError: false,
        selectedTask: null
    };
    // Dispatch para ejecutar las acciones del reducer
    const [state, dispatch] = useReducer(TaskReducer, initialState);
    // Serie de funciones para el CRUD
    // Obtiene las tareas por proyecto seleccionado
    const getTasksByProject = async projectId => {
        try {
            const response = await clientAxios.get('/api/tasks', {params: {projectId}});
            dispatch({
                type: PROJECT_TASKS,
                payload: response.data.tasks
            })
        } catch (error) {
            console.log(error.response);   
        }
    }
    // Agregar nueva tarea
    const addTaskToProject = async task => {
        try {
            const response = await clientAxios.post('/api/tasks', task);
            dispatch({
                type: ADD_TASK,
                payload: response.data.task
            });
        } catch (error) {
            console.log(error.response)
        }
    }
    // Valida el formulario por errores
    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }
    // Elimina una tarea
    const deleteTask = async (taskId, projectId) => {
        try {
            await clientAxios.delete(`/api/tasks/${taskId}`, { params: {projectId}});
            dispatch({
                type: DELETE_TASK,
                payload: taskId
            })
        } catch (error) {
            console.log(error.response)
        }
    }
    // // Modifica el estado de una tarea completo/incompleto
    // const changeTaskStatus = task => {
    //     dispatch({
    //         type: STATUS_TASK,
    //         payload: task
    //     })
    // }
    // Modificamos el nombre de la tarea seleccionada
    const updateTask = async task => {
        try {
            const response = await clientAxios.put(`/api/tasks/${task._id}`, task);
            dispatch({
                type: UPDATE_TASK,
                payload: response.data.task
            })
        } catch (error) {
            console.log(error.response)
        }
        
    }
    // Selecciona la tarea actual (Es necesario para modificarla)
    const actualTask = task => {
        dispatch({
            type: ACTUAL_TASK,
            payload: task
        })
    }
    // // Modificamos el nombre de la tarea seleccionada
    // const updateTask = task => {
    //     dispatch({
    //         type: UPDATE_TASK,
    //         payload: task
    //     })
    // }
    return (
        <TaskContext.Provider
        value={{
            projectTasks: state.projectTasks,
            taskError: state.taskError,
            selectedTask: state.selectedTask,
            getTasksByProject,
            addTaskToProject,
            validateTask,
            deleteTask,
            actualTask,
            updateTask
        }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;