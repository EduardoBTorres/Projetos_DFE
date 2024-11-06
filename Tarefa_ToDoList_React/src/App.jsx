import { useEffect, useState } from "react";
import "./App.css";
import TodoFields from "./components/TodoFields/TodoFields";
import ListTodos from "./components/ListTodos/ListTodos";

function App() {
  const [listTodos, setListTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState({});

  // Função para carregar tarefas do localStorage
  const loadTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem("listTodos");
    if (storedTodos) {
      setListTodos(JSON.parse(storedTodos));
    }
  };

  // Função para salvar tarefas no localStorage
  const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem("listTodos", JSON.stringify(todos));
  };

  const newTodo = ({ title, text }) => {
    setListTodos((_listTodos) => {
      let new_todo = { title, text };
      if (!editedTodo?.title) {
        const updatedTodos = [..._listTodos, new_todo];
        saveTodosToLocalStorage(updatedTodos); // Salva ao adicionar
        return updatedTodos;
      }
      
      const updatedListTodo = _listTodos.filter(
        (todo) => todo.title !== editedTodo.title || todo.text !== editedTodo.text
      );
      setEditedTodo({});
      const newList = [...updatedListTodo, new_todo];
      saveTodosToLocalStorage(newList); // Salva ao editar
      return newList;
    });
  };

  const deleteTodo = (_todo) => {
    setListTodos((_listTodos) => {
      const updatedTodos = _listTodos.filter((todo) => todo.title !== _todo.title);
      saveTodosToLocalStorage(updatedTodos); // Salva ao deletar
      return updatedTodos;
    });
  };

  const editTodo = (todo) => {
    setEditedTodo(todo);
  };

  useEffect(() => {
    loadTodosFromLocalStorage(); // Carrega dados ao inicializar
  }, []);

  useEffect(() => {
    console.table(listTodos);
  }, [listTodos]);

  return (
    <>
      <h1>Lista de tarefas</h1>
      <TodoFields newTodo={newTodo} todo={editedTodo} />
      <div className="card">
        {listTodos.length > 0 && (
          <ListTodos
            todosList={listTodos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )}
        <p>Crie e organize usas tarefas!!!</p>
      </div>
    </>
  );
}

export default App;
