import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Add a new to-do item
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, done: false }]);
      setNewTodo(''); // Clear input field
    }
  };

  // Toggle completion status
  const toggleDone = (index) => {
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Practice Project: Basic To-Do List App</h1>
      <p>Build a simple to-do list app where users can add items and mark them as done.</p>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
        style={{ marginRight: '10px' }}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleDone(index)}
            style={{ 
              textDecoration: todo.done ? 'line-through' : 'none', 
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

/***
 *                              Explanation:
 * State Variables: todos stores the list of to-do items, and newTodo stores the current input.
 * Add To-Do: When Add is clicked, addTodo adds a new item to todos if newTodo has content.
 * Toggle Done: toggleDone flips the done status of a to-do item when clicked, updating its style to show as completed.
 */