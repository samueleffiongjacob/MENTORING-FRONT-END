/**
 * 1. Variables and Data Types
    Explanation:
    Variables are containers that store values. In JavaScript, the most commonly used keywords to declare variables are:

    let: Allows you to declare a variable that can be reassigned.
    const: Declares a constant variable that cannot be reassigned.
*/

let name = "John"; // Can be reassigned
const age = 30; // Cannot be reassigned

// Data types
const isStudent = true; // Boolean
let score = 85; // Number
const names = "Alice"; // String
const fruits = ["apple", "banana"]; // Array
const person = { name: "Sam", age: 25 }; // Object



/** Practice Exercise:
    Create variables to store your student’s name, age, and a list of hobbies.
    Try reassigning the variables to see which ones can be modified and which cannot.
*/

/**
    * 2. Functions and Arrow Functions
    Explanation:
    Functions in JavaScript allow you to write reusable code. Arrow functions, introduced in ES6, 
    offer a shorter syntax and behave differently in how they handle this.
    Examples:

*/

// Regular function
function greet(name) {
    return `Hello, ${name}!`;
}
  
// Arrow function
const greet = (name) => `Hello, ${name}!`;

/***
 * Practice Exercise:
    Write a function called multiply that takes two numbers as arguments and returns their product.
    Rewrite multiply using arrow function syntax.
*/


/** 
 * 3. ES6+ Syntax
    Modern JavaScript (ES6+) comes with useful features:

    Template Literals: Use backticks (`) to interpolate variables directly in strings.
    Destructuring: Extract values from arrays or objects into individual variables.
    Spread and Rest Operators: The ... syntax helps manage elements in arrays or objects.
*/

``

// Template literals
const prctice = "Sarah";
console.log(`Hello, ${prctice}!`); // Hello, Sarah!

// Destructuring
const persons = { human: "Sam", age: 30 };
const { human, ages } = person;

// Spread operator
const eat_fruits = ["apple", "banana"];
const moreFruits = [...eat_fruits, "orange"];

/**
 * Practice Exercise:
    Create an object with personal details (name, age, city), then destructure it to access individual properties.
    Combine two arrays of numbers using the spread operator.
*/


/**
 * 4. Asynchronous Programming (Promises, Async/Await)
    Explanation:
    Asynchronous programming allows JavaScript to handle tasks that might take some time (like fetching data). 
    Promises and async/await make it easier to work with these tasks.

    Examples:
 */

// Using Promises
data = 'https://jsonplaceholder.typicode.com/todos/1'

const fetchDatas = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data loaded");
      }, 10000);
    });
  };
  
fetchData().then((data) => console.log(data)); // Data loaded (after 2 seconds)
  
// Using async/await
const loadData = async () => {
    const data = await fetchData();
    console.log(data);
};
  
loadData();


// solution on using the task:
const url = 'https://jsonplaceholder.typicode.com/todos/1';

const fetchData = () => {
    return fetch(url)
        .then(response => response.json()) // Parse response as JSON
        .then(data => data); // Return the parsed data
};

// Use fetchData and log the result
fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching data:", error));



/***
 * 5. DOM Manipulation (for comparison with React later)
    Explanation:
    In vanilla JavaScript, you use DOM manipulation to interact with HTML elements. This involves selecting elements,
    changing their content, and responding to events like clicks.

    Examples:
 */

// JavaScript
let count = 0;

const increment = () => {
  count += 1;
  document.getElementById("counter").textContent = count;
};

