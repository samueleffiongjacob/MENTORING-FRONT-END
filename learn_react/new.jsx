/**
 * 2. JSX Syntax
    Explanation:
    JSX (JavaScript XML) allows you to write HTML-like syntax in JavaScript, which React then compiles to JavaScript. JSX makes it easier to visualize and manage the component structure directly in code.

    Examples:
*/

// Basic JSX example
const element = <h1>Hello, World!</h1>;

// Embedding JavaScript expressions in JSX
const name = "Sarah";
const greeting = <h2>Hello, {name}!</h2>;

/**
 * Practice Exercise:
    Create a new component in src/App.js that displays your name inside an <h1> tag.
    Experiment by embedding JavaScript expressions in JSX, like using a Math.random() to display a random number.
 */

import React from 'react';

function App() {
    return (
        <div className="App">
          <MyComponent />
        </div>
      );
    }
    
function MyComponent() {
    const name = "Samuel Effiong Jacob";
      return (
        <div>
          <h1>{name}</h1>
          <p>Here is a random number: {Math.random()}</p>
        </div>
      );
    }
    
export default App;
    