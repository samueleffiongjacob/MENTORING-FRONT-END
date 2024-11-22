// import React, { useState } from 'react';

// const TodoAppToggle = () => {
//   const [todos, setTodos] = useState([]); // To-do list state
//   const [newTodo, setNewTodo] = useState(''); // Input field state
//   const [showTodos, setShowTodos] = useState(true); // Toggle state

//   // Add a new to-do item
//   const addTodo = () => {
//     if (newTodo.trim()) {
//       setTodos([...todos, { text: newTodo, done: false }]);
//       setNewTodo('');
//     }
//   };

//   // Toggle completion status
//   const toggleDone = (index) => {
//     const updatedTodos = todos.map((todo, i) =>
//       i === index ? { ...todo, done: !todo.done } : todo
//     );
//     setTodos(updatedTodos);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>To-Do List App</h2>
      
//       {/* Toggle Button */}
//       <button
//         onClick={() => setShowTodos(!showTodos)}
//         style={{
//           padding: '10px',
//           marginBottom: '20px',
//           backgroundColor: showTodos ? '#007bff' : '#6c757d',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//         }}
//       >
//         {showTodos ? 'Hide To-Do List' : 'Show To-Do List'}
//       </button>

//       {/* Input and To-Do List */}
//       {showTodos && (
//         <div>
//           <input
//             type="text"
//             value={newTodo}
//             onChange={(e) => setNewTodo(e.target.value)}
//             placeholder="Add a new task"
//             style={{ marginRight: '10px' }}
//           />
//           <button onClick={addTodo}>Add</button>

//           <ul>
//             {todos.map((todo, index) => (
//               <li
//                 key={index}
//                 onClick={() => toggleDone(index)}
//                 style={{
//                   textDecoration: todo.done ? 'line-through' : 'none',
//                   cursor: 'pointer',
//                   marginTop: '10px',
//                 }}
//               >
//                 {todo.text}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TodoAppToggle;


import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [showTodos, setShowTodos] = useState(true);
  const [showList, setShowList] = useState(true);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, done: false }]);
      setNewTodo('');
    }
  };

  const toggleDone = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  console.log("TodoApp rendered"); // Debugging log

  return (
    <div style={{ padding: '20px' }}>
      <h2>To-Do List App</h2>
      <button
        onClick={() => setShowTodos(!showTodos)}
        style={{
          padding: '10px',
          marginBottom: '20px',
          backgroundColor: showTodos ? '#007bff' : '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {showTodos ? 'Hide To-Do Section' : 'Show To-Do Section'}
      </button>

      {showTodos && (
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
            style={{ marginRight: '10px' }}
          />
          <button onClick={addTodo}>Add</button>

          <button
            onClick={() => setShowList(!showList)}
            style={{
              padding: '10px',
              marginTop: '10px',
              backgroundColor: showList ? '#28a745' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              display: 'block',
            }}
          >
            {showList ? 'Hide To-Do Items' : 'Show To-Do Items'}
          </button>

          {showList && (
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
          )}
        </div>
      )}
    </div>
  );
};

export default TodoApp;

/**
 * Explanation of the New Features
 * 1. State for <ul> Visibility: 
 *      Added a new state variable, showList, which controls whether the <ul> element (the list of to-do items) is displayed.
 * Default value is true.
 * 2. Second Toggle Button:
 *      Added a second button below the input field to toggle the visibility of the <ul> element.
 *      Button text dynamically changes between "Show To-Do Items" and "Hide To-Do Items" based on the state of showList.
 * 3. Conditional Rendering for <ul>: 
 *      The <ul> element is conditionally rendered based on the showList state. If showList is false, the <ul> (and its list items) will not be displayed.
 */