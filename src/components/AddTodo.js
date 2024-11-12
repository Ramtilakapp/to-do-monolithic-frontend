import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(process.env.REACT_APP_API_URL, { task })
      .then(response => {
        onAdd(response.data);
        setTask('');
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
