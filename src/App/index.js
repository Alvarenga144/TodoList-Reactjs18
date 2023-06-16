import React from 'react';
import { AppUi } from './AppUi/AppUi';
import { useLocalStorage } from './useLocalStorage';


/*const defaultTodos = [
  { text: 'Ordenar el cuarto', Completed: true },
  { text: 'Finalizar Curso React', Completed: false },
  { text: 'Estudiar Vocabulario', Completed: false },
  { text: 'Comprar Frappuccino', Completed: false },
  { text: 'Estados derivados', Completed: true },
  ];

  localStorage.setItem(itemName, JSON.stringify(defaultTodos));*/


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
      (todo) => todo.text === text
    );
    newItem[todoIndex].Completed = true;
    saveTodos(newItem);
  };

  const eliminaTodo = (text) => {
    const newItem = [...todos];
    const todoIndex = newItem.findIndex(
      (todo) => todo.text === text
    );
    newItem.splice(todoIndex, 1);
    saveTodos(newItem);
  }

  return (
    <AppUi
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completaTodo={completaTodo}
    eliminaTodo={eliminaTodo}
    />
  );

}

export default App;
