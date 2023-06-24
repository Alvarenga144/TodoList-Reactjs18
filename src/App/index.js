import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUi } from './AppUi/AppUi';

function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
