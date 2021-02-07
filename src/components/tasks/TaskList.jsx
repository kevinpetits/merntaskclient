import React from 'react'
import Task from './Task';

const TaskList = () => {

    const tasks = [
        {id: 1, taskName: 'Elegir plataforma', status: true},
        {id: 2, taskName: 'Elegir colores', status: false},
        {id: 3, taskName: 'Elegir plataforma de pagos', status: false},
        {id: 4, taskName: 'Elegir hosting', status: true},
        {id: 5, taskName: 'Crear productos', status: true},
    ]

    return ( 
        <>
        <h2>Proyecto: Tienda Virtual</h2>

        <ul className="listado-tareas">
            {tasks.length === 0 
            ? (<li className="tarea"><p>No hay tareas</p></li>)
            : tasks.map(task => (
                <Task task={task} key={task.id} />
            ))
            }
        </ul>

        <button type="button" className="btn btn-eliminar">Eliminar proyecto &times;</button>
        </>
     );
}
 
export default TaskList;