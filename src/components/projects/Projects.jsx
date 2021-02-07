import React from 'react'
import Bar from '../layout/Bar';
import Sidebar from './../layout/Sidebar';
import FormTask from '../tasks/FormTask';
import TaskList from '../tasks/TaskList';

const Porjects = () => {
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
 
export default Porjects;