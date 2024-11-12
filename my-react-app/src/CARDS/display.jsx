import React from 'react';
import Card from './card'

const Display = () => {
  return (
    <div>
      <h1>Card List</h1>
      <Card title="card 1" description="This is the first card." />
      <Card title="card 2" description="This is the second card." />
      <Card title="card 3" description="This is the third card." />
    </div>
  );
};

export default Display;
