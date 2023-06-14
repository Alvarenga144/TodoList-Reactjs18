import React from 'react';
import { Title } from './Title';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './Apps.css'

/*const defaultTodos = [
  { text: 'Ordenar el cuarto', Completed: true },
  { text: 'Finalizar Curso React', Completed: false },
  { text: 'Estudiar Vocabulario', Completed: false },
  { text: 'Comprar Frappuccino', Completed: false },
  { text: 'Estados derivados', Completed: true },
  ];

  localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));*/

function App() {
  // LocalStorage
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  // Estado de para todos y counter todos
  const [todos, setTodos] = React.useState(parsedTodos);
  // Estado de input de busqueda
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.Completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searcText = searchValue.toLocaleLowerCase();
      return todoText.includes(searcText);
    }
  )

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos);
  };

  const completaTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].Completed = true;
    saveTodos(newTodos);
  };

  const eliminaTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

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

export default App;
