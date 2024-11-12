import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL)
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleToggle = (id, completed) => {
    axios.put(`${process.env.REACT_APP_API_URL}/${id}`, { completed: !completed })
      .then(response => setTodos(todos.map(todo => todo._id === id ? response.data : todo)))
      .catch(error => console.error(error));
  };

  const handleDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/${id}`)
      .then(() => setTodos(todos.filter(todo => todo._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.task}
            </span>
            <button onClick={() => handleToggle(todo._id, todo.completed)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDelete(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
