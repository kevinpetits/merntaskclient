import React, { useReducer } from 'react'
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {PROJECT_FORM, GET_PROJECTS, ADD_PROJECT} from '../../types';


const ProjectState = props => {
    
    const projects = [
        {projectName: 'Tienda Virtual', id: 1},
        {projectName: 'MERN Ecommerce', id: 2},
        {projectName: 'MERN Facebook', id: 3},
        {projectName: 'MERN Twitter', id: 4},
        {projectName: 'MERN Youtube', id: 5},
        {projectName: 'MERN Project Manager', id: 6},
        {projectName: 'MERN IDK', id: 7},
    ];

    const initialState = {
        projects : [],
        formProject : false
    }
    
    const [state, dispatch] = useReducer(projectReducer, initialState);

    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        })
    }

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    return (
        <projectContext.Provider 
        value={{
            formProject: state.formProject,
            projects: state.projects,
            showForm,
            getProjects
            }}>
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;