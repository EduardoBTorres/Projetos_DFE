import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  // Carregar as tarefas do localStorage ao iniciar o app
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos)); // Atualiza o estado com as tarefas salvas
    }
  }, []);

  // Salvar as tarefas no localStorage sempre que forem alteradas
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)); // Atualiza o localStorage
  }, [todos]); // Dependência no estado todos

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  const editTodo = (id, newText, newCategory) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText, category: newCategory } : todo
    );
    setTodos(newTodos);
  };

  return (
    <>
      <div className="app">
        <h1>Lista de Tarefas</h1>
        <div className="todo-list">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
              editTodo={editTodo}
            />
          ))}
        </div>
        <TodoForm addTodo={addTodo} />
      </div>
    </>
  );
}

export default App;
