import React from "react";
import './EmptyTodo.css';

function EmptyTodos() {
    return(
        <div className="emptyContainer">
            <p className="emptyTodo">¡Whoops! Parece que aún no hay Tareas,</p>
            <p className="emptyTodo">¡Crea tu primer Tarea!</p>
        </div>
    );
}

export { EmptyTodos };