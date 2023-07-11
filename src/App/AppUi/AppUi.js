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
import { Footer } from '../../Footer/index';
import { Modal } from '../../Modal';
import { TodoForm } from '../../TodoForm';
import { TodoContext } from '../../TodoContext';

function AppUi() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        validatting,
    } = React.useContext(TodoContext);
    return (
        <>
            <Title />
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading ?
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </> : null}
                {error ? <TodosError /> : null}
                {!loading && searchedTodos.length === 0 ? <EmptyTodos /> : null}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
            {openModal && (
                <Modal>
                    <TodoForm
                        validatting={validatting}
                    />
                </Modal>
            )}
            <Footer />
        </>
    );
}

export { AppUi };