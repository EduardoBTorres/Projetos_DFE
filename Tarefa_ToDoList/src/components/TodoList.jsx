import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import Todo from './Todo';

const TodoList = () => {
  const { todos, removeTodo, completeTodo, editTodo } = useContext(TodoContext);

  return (
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
  );
};

export default TodoList;
