import React from 'react';
import ToDoList from '../components/ToDoList';
import { ToDoProvider } from '../contexts/ToDoProvider';

const App = () => (
  <ToDoProvider>
    <ToDoList />
  </ToDoProvider>
);

export default App;
