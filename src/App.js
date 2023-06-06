import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  { text: 'Ordenar el cuarto', Completed: true},
  { text: 'Finalizar Curso React', Completed: false},
  { text: 'Estudiar Vocabulario', Completed: true},
  { text: 'Comprar Frappuccino', Completed: false},
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={10} total={20} />
      <TodoSearch />
      
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      
      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
