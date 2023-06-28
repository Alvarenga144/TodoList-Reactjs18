import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);

    return (
        totalTodos <= 0 ? 
            <p className='TodoCounter'>
                Aún no has completado tareas
            </p>
        :
        totalTodos === completedTodos ?
            <p className='TodoCounter'>
                ¡¡Felicidades!! 🥳🎖️ <br />
                Completaste todas las tareas.
            </p>
            :
            <p className='TodoCounter'>
                Has completado
                <span>{completedTodos}</span>
                de
                <span>{totalTodos}</span>
                tareas
            </p>
    );
}

export { TodoCounter };