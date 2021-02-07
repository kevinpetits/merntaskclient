import React from 'react'
import NewProjectForm from './../projects/NewProjectForm';
import ProjectList from './../projects/ProjectList';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>MERN <span>Project Manager</span></h1>
            <NewProjectForm />
            <div className="proyectos">
                <h2>Tus proyectos</h2>

                <ProjectList />
            </div>
        </aside>
     );
}
 
export default Sidebar;