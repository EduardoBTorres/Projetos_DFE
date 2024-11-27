import React, { createContext, useState, useEffect, useRef } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const todosRef = useRef([]);

  // Carregar as tarefas do localStorage ao iniciar o app
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      setTodos(parsedTodos);
      todosRef.current = parsedTodos; // Atualiza a referência
    }
  }, []);

  // Salvar as tarefas no localStorage sempre que forem alteradas
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todosRef.current));
  }, [todos]);

  const addTodo = (text, category) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    };
    todosRef.current = [...todosRef.current, newTodo];
    setTodos([...todosRef.current]);
  };

  const removeTodo = (id) => {
    todosRef.current = todosRef.current.filter((todo) => todo.id !== id);
    setTodos([...todosRef.current]);
  };

  const completeTodo = (id) => {
    todosRef.current = todosRef.current.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos([...todosRef.current]);
  };

  const editTodo = (id, newText, newCategory) => {
    todosRef.current = todosRef.current.map((todo) =>
      todo.id === id ? { ...todo, text: newText, category: newCategory } : todo
    );
    setTodos([...todosRef.current]);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, completeTodo, editTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
