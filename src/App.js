import React from 'react';
import { Title } from './Title';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './Apps.css'

const defaultTodos = [
  { text: 'Ordenar el cuarto', Completed: true},
  { text: 'Finalizar Curso React', Completed: false},
  { text: 'Estudiar Vocabulario', Completed: false},
  { text: 'Comprar Frappuccino', Completed: false},
  { text: 'Estados derivados', Completed: true},
]

function App() {
  // Estado de para todos y counter todos
  const [todos, setTodos] = React.useState(defaultTodos);
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

  console.log(searchValue);

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
            />
          ))}
        </TodoList>
        
      <CreateTodoButton />
      
    </>
  );
}

export default App;
