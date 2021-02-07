import React, { useReducer } from 'react'
import projectContext from './projectContext';
import projectReducer from './projectReducer';

const ProjectState = props => {
    const initialState = {
        formProject : false
    }
    
    const [state, dispatch] = useReducer(projectReducer, initialState)

    return (
        <projectContext.Provider value={{formProject: state.formProject}}>
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;