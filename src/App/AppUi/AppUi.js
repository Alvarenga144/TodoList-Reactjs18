import React from 'react';
import { Title } from '../../Title/index';
import { TodoCounter } from '../../TodoCounter/index';
import { TodoSearch } from '../../TodoSearch/index';
import { TodoList } from '../../TodoList/index';
import { TodoItem } from '../../TodoItem/index';
import { CreateTodoButton } from '../../CreateTodoButton/index';

function AppUi(
    {
        loading, 
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completaTodo,
        eliminaTodo,
    }
) {
    return (
        <>
            <Title />
            <TodoCounter
                completed={completedTodos}
                total={totalTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {loading ? <> <p>Cargando...</p> </> : null }
                {error ? <> <p>Whoops!! Parece que algo salió mal.</p> </> : null }
                {!loading && searchedTodos.length === 0 ? <> <p>Crea tu primer TODO!</p> </> : null}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.Completed}
                        onComplete={() => completaTodo(todo.text)}
                        onDelete={() => eliminaTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />

        </>
    );
}

export { AppUi };