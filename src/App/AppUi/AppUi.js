import React from 'react';
import { Title } from '../../Title/index';
import { TodoCounter } from '../../TodoCounter/index';
import { TodoSearch } from '../../TodoSearch/index';
import { TodoList } from '../../TodoList/index';
import { TodoItem } from '../../TodoItem/index';
import { CreateTodoButton } from '../../CreateTodoButton/index';

function AppUi(
    {
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