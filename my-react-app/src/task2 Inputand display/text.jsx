import React, { useState } from 'react';

const TextInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ margin: '20px' }}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ padding: '5px' }}
      />
      <p>Current Input: {value}</p>
    </div>
  );
};

export default TextInput;
