import React from 'react';
import { TodoProvider } from './components/TodoContext';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  return (
    <TodoProvider>
      <div className="app">
        <h1>Lista de Tarefas</h1>
        <TodoList />
        <TodoForm />
      </div>
    </TodoProvider>
  );
}

export default App;
