import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return(
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