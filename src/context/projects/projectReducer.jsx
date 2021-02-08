import {PROJECT_FORM, GET_PROJECTS, ADD_PROJECT, VALIDATE_FORM, ACTUAL_PROJECT} from '../../types';

const projectReducer = (state, action) => {
    switch (action.type) {
        case PROJECT_FORM:
            return {
                ...state,
                formProject: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                formProject: false,
                formError: false
            }
        case VALIDATE_FORM:
            return {
                ...state,
                formError: true
            }
        case ACTUAL_PROJECT:
            return {
                ...state,
                project: state.projects.filter(project => project.id === action.payload)
            }
        default:
            return state;
    }
}

export default projectReducer;