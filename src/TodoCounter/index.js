import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);

    return (
        totalTodos === completedTodos ?
            <p className='TodoCounter'>
                ¡¡Completaste todas las tareas 🥳🎖️!!
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