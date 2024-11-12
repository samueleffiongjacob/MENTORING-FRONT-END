import React from 'react';
import Button from './button';

const App1 = () => {
  const handleClick = (label) => {
    console.log(`Button ${label} clicked!`);
  };

  return (
    <div>
      <h1>Buttons</h1>
      <Button label="Click me" onClick={() => handleClick("Click me")} />
      <Button label="Submit" onClick={() => handleClick("Submit")} />
      <Button label="Reset" onClick={() => handleClick("Reset")} />
    </div>
  );
};

export default App1;
