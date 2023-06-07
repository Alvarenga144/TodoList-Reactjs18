import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return(
        <p className='TodoCounter'>
            Has completado 
            <span>{completed}</span> 
            de 
            <span>{total}</span> 
            Tareas
        </p>
    );
}

export { TodoCounter };