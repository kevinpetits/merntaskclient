import React from 'react'
import NewProjectForm from './../projects/NewProjectForm';
import ProjectList from './../projects/ProjectList';

const Sidebar = () => {
    return ( 
        <div className="sidebar" data-color="purple" data-background-color="dark">

        <div className="logo"><a href="http://www.creative-tim.com" className="simple-text logo-normal">
            Project Manager
          </a></div>
        <div className="sidebar-wrapper">
            <NewProjectForm />
            
            <ProjectList />
        </div>
      </div>
     );
}
 
export default Sidebar;