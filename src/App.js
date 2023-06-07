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
  { text: 'Estudiar Vocabulario', Completed: true},
  { text: 'Comprar Frappuccino', Completed: false},
]

function App() {
  return (
    <>
      <Title />
      {/*<div className='main-container'>*/}
        <TodoCounter completed={10} total={20} />
        <TodoSearch />
        
        <TodoList>
          {defaultTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.Completed} 
            />
          ))}
        </TodoList>
      {/*</div>*/}
      
      <CreateTodoButton />
      
    </>
  );
}

export default App;
