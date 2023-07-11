import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOLIST_V1_ALVARENGA144', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const validatting = (text) => {
        const resultInput = todos.filter(
            (todo) => {
                const todoText = todo.text.toLowerCase();
                const searchText = newTodoValue.toLowerCase();
                return (todoText === searchText);
            }
        );
        console.log(text);
    }

    const completedTodos = todos.filter(
        todo => !!todo.completed
    ).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            //console.log(searchText);
            return todoText.includes(searchText);
        }
    );

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        })
        saveTodos(newTodos);
    };

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            newTodoValue,
            setNewTodoValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            validatting,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };

/*

const filtradoExistente = newTodos.filter(
            (todo) => {
                if (todo.text === text) {
                    console.log(`Ya existe: ${todo.text}`);
                } else {
                    console.log('disponible');
                }
            }
        );

*/