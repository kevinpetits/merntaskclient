import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {v4 as uuid} from 'uuid';
import {PROJECT_TASKS, ADD_TASK, VALIDATE_TASK, DELETE_TASK, STATUS_TASK, ACTUAL_TASK, UPDATE_TASK} from './../../types';

const TaskState = props => {
    const initialState = {
        tasks: [
            {id: 1, taskName: 'Elegir plataforma', status: true, projectId: 1},
            {id: 2, taskName: 'Elegir colores', status: false, projectId: 1},
            {id: 3, taskName: 'Elegir plataforma de pagos', status: false, projectId: 2},
            {id: 4, taskName: 'Elegir hostin12g', status: true, projectId: 3},
            {id: 5, taskName: 'Crear produc12tos', status: false, projectId: 4},
            {id: 6, taskName: 'Elegir pla51taforma de pagos', status: true, projectId: 2},
            {id: 7, taskName: 'Elegir hosti512ng', status: true, projectId: 3},
            {id: 8, taskName: 'Crear productos', status: true, projectId: 4},
            {id: 9, taskName: 'Elegir plat52aforma de pagos', status: false, projectId: 2},
            {id: 10, taskName: 'Elegir ho4sting', status: false, projectId: 3},
            {id: 11, taskName: 'Crear pro67ductos', status: true, projectId: 4},
        ],
        projectTasks: null,
        taskError: false,
        selectedTask: null
    };

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getTasksByProject = projectId => {
        dispatch({
            type: PROJECT_TASKS,
            payload: projectId
        })
    }

    const addTaskToProject = task => {
        task.id = uuid();
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }

    const deleteTask = taskId => {
        dispatch({
            type: DELETE_TASK,
            payload: taskId
        })
    }

    const changeTaskStatus = task => {
        dispatch({
            type: STATUS_TASK,
            payload: task
        })
    }

    const actualTask = task => {
        dispatch({
            type: ACTUAL_TASK,
            payload: task
        })
    }

    const updateTask = task => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        })
    }

    return (
        <TaskContext.Provider
        value={{
            tasks: state.tasks,
            projectTasks: state.projectTasks,
            taskError: state.taskError,
            selectedTask: state.selectedTask,
            getTasksByProject,
            addTaskToProject,
            validateTask,
            deleteTask,
            changeTaskStatus,
            actualTask,
            updateTask
        }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;