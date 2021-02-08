import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const ProjectItem = ({project}) => {

    const contextProject = useContext(projectContext);
    const { actualProject } =  contextProject;

    return ( 
        <li>
            <button type="button" className="btn btn-blank" onClick={() => actualProject(project.id)}>
                {project.projectName}
            </button>
        </li>
     );
}
 
export default ProjectItem;