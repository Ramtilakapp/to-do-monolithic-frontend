import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <AddTodo onAdd={handleAdd} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
