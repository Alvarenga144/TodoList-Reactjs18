import './TodoSearch.css';

function TodoSearch() {
    return(
        <input
            placeholder="Buscar tarea..."
            className="TodoSearch"
            onChange={(event) => {
                console.log(event.target.value);
            }}
        />
    );
}

export { TodoSearch }