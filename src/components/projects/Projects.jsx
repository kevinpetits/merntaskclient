import React, {useContext, useEffect} from 'react'
import Bar from '../layout/Bar';
import Sidebar from './../layout/Sidebar';
import FormTask from '../tasks/FormTask';
import TaskList from '../tasks/TaskList';
import AuthContext from '../../context/auth/authContext';

const Projects = () => {

    //Extracting auth info
    const authContext = useContext(AuthContext);
    const {getAuthenticatedUser} = authContext;

    useEffect(() => {
        getAuthenticatedUser();
    }, [])

    return ( 
        <div className="contenedor-app">
            <Sidebar />

            <div className="seccion-principal">
                <Bar />

                <main>
                <FormTask />
                    <div className="contenedor-tareas">
                        <TaskList />
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Projects;