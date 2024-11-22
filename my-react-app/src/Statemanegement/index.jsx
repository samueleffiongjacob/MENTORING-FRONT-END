import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable named "count" with initial value of 0
  const [count, setCount] = useState(0);

  return (
    <>
        <h1 style={{color:"green"}}> Use STATE HOOK </h1>
        <p>The useState hook lets you add state to functional components. 
            Each state variable in a component is independent,
            and useState provides a function to update it.
        </p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>Increase</button>
    </>
  );
};

export default Counter;
