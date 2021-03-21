import React from 'react'
import NewProjectForm from './../projects/NewProjectForm';
import ProjectList from './../projects/ProjectList';

const Sidebar = () => {
    return ( 
        // <aside>
        //     <h1>MERN <span>Project Manager</span></h1>
        //     <NewProjectForm />
        //     <div className="proyectos">
        //         <h2>Tus proyectos</h2>

        //         <ProjectList />
        //     </div>
        // </aside>
        <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">

        <div className="logo"><a href="http://www.creative-tim.com" className="simple-text logo-normal">
            Project Manager
          </a></div>
        <div className="sidebar-wrapper">
            <NewProjectForm />
            <h3 className="text-center">Your Projects</h3>
            <ProjectList />
        </div>
      </div>
     );
}
 
export default Sidebar;