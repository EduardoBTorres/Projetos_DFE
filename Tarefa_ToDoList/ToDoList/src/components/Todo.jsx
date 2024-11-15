import React, { useState } from 'react';

const Todo = ({ todo, removeTodo, completeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newCategory, setNewCategory] = useState(todo.category);

  const handleEdit = () => {
    editTodo(todo.id, newText, newCategory);
    setIsEditing(false);
  };

  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          >
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
          </select>
          <button onClick={handleEdit}>Salvar</button>
        </div>
      ) : (
        <>
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
          </div>
          <div>
            <button onClick={() => completeTodo(todo.id)}>Completar</button>
            <button onClick={() => removeTodo(todo.id)}>x</button>
            <button onClick={() => setIsEditing(true)}>Editar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
