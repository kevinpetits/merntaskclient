import {PROJECT_FORM, GET_PROJECTS} from '../../types';

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
        default:
            return state;
    }
}

export default projectReducer;