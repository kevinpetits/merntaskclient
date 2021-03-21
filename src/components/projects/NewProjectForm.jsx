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
        <button type="button" className="btn btn-block btn-primary mt-4" onClick={showForm}>New Project</button>

        { formProject 
        ? (
            <form className="p-2" onSubmit={handleSubmit}>
                <div className="form-group">
                <input type="text" className="form-control" placeholder="Project Name" name="projectName" onChange={handleChange} value={projectName} />
                </div>
                <input type="submit" className="btn btn-block btn-primary" value="Add Project" />
            </form>
        )
        : null
        }

        { formError ? <div class="alert alert-danger" role="alert">
            Project name is required!
            </div> : null}
        </>
     );
}
 
export default NewProjectForm;