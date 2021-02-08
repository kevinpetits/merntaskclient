import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {PROJECT_TASKS, ADD_TASK, VALIDATE_TASK} from './../../types';

const TaskState = props => {
    const initialState = {
        tasks: [
            {taskName: 'Elegir plataforma', status: true, projectId: 1},
            {taskName: 'Elegir colores', status: false, projectId: 1},
            {taskName: 'Elegir plataforma de pagos', status: false, projectId: 2},
            {taskName: 'Elegir hostin12g', status: true, projectId: 3},
            {taskName: 'Crear produc12tos', status: true, projectId: 4},
            {taskName: 'Elegir pla51taforma de pagos', status: false, projectId: 2},
            {taskName: 'Elegir hosti512ng', status: true, projectId: 3},
            {taskName: 'Crear productos', status: true, projectId: 4},
            {taskName: 'Elegir plat52aforma de pagos', status: false, projectId: 2},
            {taskName: 'Elegir ho4sting', status: true, projectId: 3},
            {taskName: 'Crear pro67ductos', status: true, projectId: 4},
        ],
        projectTasks: null,
        taskError: false
    };

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getTasksByProject = projectId => {
        dispatch({
            type: PROJECT_TASKS,
            payload: projectId
        })
    }

    const addTaskToProject = task => {
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

    return (
        <TaskContext.Provider
        value={{
            tasks: state.tasks,
            projectTasks: state.projectTasks,
            taskError: state.taskError,
            getTasksByProject,
            addTaskToProject,
            validateTask
        }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;