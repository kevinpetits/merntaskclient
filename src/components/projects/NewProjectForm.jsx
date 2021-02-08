import React, {useContext, useState} from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProjectForm = () => {

    const contextProject = useContext(projectContext);
    const { formProject, formError, showForm, addProject, showError } =  contextProject;

    const [project, setProject] = useState({
        projectName: ''
    });

    const { projectName } = project;

    const handleChange = (event) => {
        setProject({
            ...project,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(projectName === ''){
            showError();
            return;
        }

        addProject(project);
        setProject({
            projectName: ''
        });
    }

    return ( 
        <>
        <button type="button" className="btn btn-block btn-primario" onClick={showForm}>Nuevo proyecto</button>

        { formProject 
        ? (
            <form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
                <input type="text" className="input-text" placeholder="Nombre Proyecto" name="projectName" onChange={handleChange} value={projectName} />
                <input type="submit" className="btn btn-block btn-primario" value="Agregar proyecto" />
            </form>
        )
        : null
        }

        { formError ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}
        </>
     );
}
 
export default NewProjectForm;