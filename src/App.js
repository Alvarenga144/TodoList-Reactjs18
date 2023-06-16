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

  localStorage.setItem(itemName, JSON.stringify(defaultTodos));*/

function useLocalStorage(itemName, initialValue) {
  // LocalStorage
  const localStorageItems = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItems) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItems);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  // Estado de para todos y counter todos
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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

  const completaTodo = (text) => {
    const newItem = [...todos];
    const todoIndex = newItem.findIndex(
      (todo) => todo.text == text
    );
    newItem[todoIndex].Completed = true;
    saveTodos(newItem);
  };

  const eliminaTodo = (text) => {
    const newItem = [...todos];
    const todoIndex = newItem.findIndex(
      (todo) => todo.text == text
    );
    newItem.splice(todoIndex, 1);
    saveTodos(newItem);
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
