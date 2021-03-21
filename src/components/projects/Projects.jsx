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
        <>
            <Sidebar />

            <div className="main-panel bg-light">
                <Bar />




                <div className="content bg-light">
                <FormTask />
                    <div className="container-fluid col-md-10">
                        <TaskList />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Projects;