import React, { useReducer } from 'react';
import ProjectContext from './projectContext';
import ProjectReducer from './projectReducer';
import {PROJECT_FORM, GET_PROJECTS, ADD_PROJECT, VALIDATE_FORM, ACTUAL_PROJECT, DELETE_PROJECT, PROJECT_ERROR} from '../../types';
import clientAxios from '../../config/axios';

const ProjectState = props => {

    const initialState = {
        projects : [],
        formProject : false,
        formError: false,
        project: null,
        message: null
    }
    // Dispatch para ejecutar las acciones del reducer
    const [state, dispatch] = useReducer(ProjectReducer, initialState);
    // Serie de funciones para el CRUD
    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        })
    }
    // Obtener los proyectos
    const getProjects = async() => {
        try {
            const response = await clientAxios.get('/api/projects');
            dispatch({
                type: GET_PROJECTS,
                payload: response.data.projects
            })
        } catch (error) {
            const alert = {
                msg: error.response.data,
                category: 'alerta-error'
            }
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })
        }
    }
    // Agregar nuevo proyecto
    const addProject = async project => {
        try {
            const response = await clientAxios.post('/api/projects', project);
            dispatch({
                type: ADD_PROJECT,
                payload: response.data
            })
        } catch (error) {
            const alert = {
                msg: error.response.data,
                category: 'alerta-error'
            }
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })
        }
    }
    // Valida el formulario por errores
    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }
    // Selecciona el Proyecto que el usuario quiera
    const actualProject = projectId => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: projectId
        })
    }
    // Elimina un proyecto
    const deleteProject = async projectId => {
        try {
            await clientAxios.delete(`/api/projects/${projectId}`)
            dispatch({
                type: DELETE_PROJECT,
                payload: projectId
            })
        } catch (error) {
            const alert = {
                msg: error.response.data,
                category: 'alerta-error'
            }
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })
        }
    }
    return (
        <ProjectContext.Provider 
        value={{
            formProject: state.formProject,
            projects: state.projects,
            project: state.project,
            formError: state.formError,
            message: state.message,
            showForm,
            getProjects,
            addProject,
            showError,
            actualProject,
            deleteProject
            }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;