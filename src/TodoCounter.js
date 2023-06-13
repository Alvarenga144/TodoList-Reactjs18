import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return(
        total == completed ?
        <p className='TodoCounter'>
            ¡¡Completaste todas las tareas 🥳🎖️!!
        </p>
        :
        <p className='TodoCounter'>
            Has completado 
            <span>{completed}</span> 
            de 
            <span>{total}</span> 
            tareas
        </p>
    );
}

export { TodoCounter };