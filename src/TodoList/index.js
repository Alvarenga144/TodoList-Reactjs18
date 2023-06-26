import React from 'react';
import './TodoList.css';

function TodoList({ children }) {
    /*const {
        children,
    } = React.useContext(TodoContext);*/

    return(
        <ul className="TodoList">{children}</ul>
    );
}

export { TodoList };