import React from 'react';
import { Title } from '../../Title/index';
import { TodoCounter } from '../../TodoCounter/index';
import { TodoSearch } from '../../TodoSearch/index';
import { TodoList } from '../../TodoList/index';
import { TodoItem } from '../../TodoItem/index';
import { TodosLoading } from '../../TodosLoading/index';
import { TodosError } from '../../TodosError/index';
import { EmptyTodos } from '../../EmptyTodos/index';
import { CreateTodoButton } from '../../CreateTodoButton/index';
import { Footer} from '../../Footer/index';
import { TodoContext } from '../../TodoContext';

function AppUi() {
    return (
        <>
            <Title />
            <TodoCounter />
            <TodoSearch />

            <TodoContext.Consumer>
                {({
                    loading, 
                    error,
                    completedTodos,
                    totalTodos,
                    searchValue,
                    setSearchValue,
                    searchedTodos,
                    completaTodo,
                    eliminaTodo,
                }) => {
                    <TodoList>
                    {loading ? <TodosLoading /> : null }
                    {error ? <TodosError /> : null }
                    {!loading && searchedTodos.length === 0 ? <EmptyTodos /> : null}
    
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
                }}
            </TodoContext.Consumer>

            <CreateTodoButton />
            <Footer />
        </>
    );
}

export { AppUi };