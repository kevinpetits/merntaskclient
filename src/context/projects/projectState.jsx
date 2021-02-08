import React, { useReducer } from 'react';
import {v4 as uuid} from 'uuid';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {PROJECT_FORM, GET_PROJECTS, ADD_PROJECT, VALIDATE_FORM, ACTUAL_PROJECT} from '../../types';


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
        formProject : false,
        formError: false,
        project: null
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

    const addProject = project => {
        const id = uuid();
        project.id = id;

        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    const actualProject = projectId => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: projectId
        })
    }

    return (
        <projectContext.Provider 
        value={{
            formProject: state.formProject,
            projects: state.projects,
            project: state.project,
            formError: state.formError,
            showForm,
            getProjects,
            addProject,
            showError,
            actualProject
            }}>
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;