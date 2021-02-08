import React, {useContext, useState} from 'react';
import ProjectContext from '../../context/projects/projectContext';

const NewProjectForm = () => {
    // Obtener el state del formulario
    const contextProject = useContext(ProjectContext);
    const { formProject, formError, showForm, addProject, showError } =  contextProject;
    // State para Proyecto
    const [project, setProject] = useState({
        projectName: ''
    });
    // Extraer nombre de proyecto
    const { projectName } = project;
    // Lee los contenidos del input
    const handleChange = (event) => {
        setProject({
            ...project,
            [event.target.name] : event.target.value
        })
    }
    // Cuando el usuario envia un proyecto
    const handleSubmit = (event) => {
        event.preventDefault();
        // Validar el proyecto
        if(projectName === ''){
            showError();
            return;
        }
        // agregar al state
        addProject(project);
        // Reiniciar el form
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