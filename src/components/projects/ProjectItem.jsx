import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const ProjectItem = ({project}) => {

    const contextProject = useContext(ProjectContext);
    const { actualProject } =  contextProject;

    const contextTask = useContext(TaskContext);
    const { getTasksByProject } = contextTask;

    const handleClick = (id) => {
        actualProject(id);
        getTasksByProject(id);
    }

    return ( 
        <li>
            <button type="button" className="btn btn-blank" onClick={() => handleClick(project.id)}>
                {project.projectName}
            </button>
        </li>
     );
}
 
export default ProjectItem;