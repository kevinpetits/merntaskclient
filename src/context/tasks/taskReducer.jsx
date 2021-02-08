import {PROJECT_TASKS, ADD_TASK, VALIDATE_TASK} from '../../types';

const TaskReducer = (state, action) => {
    switch (action.type) {
        case PROJECT_TASKS:
            return {
                ...state,
                projectTasks: state.tasks.filter(task => task.projectId === action.payload)
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case VALIDATE_TASK:
            return {
                ...state,
                taskError: true
            }
        default:
            return state;
    }
}

export default TaskReducer;