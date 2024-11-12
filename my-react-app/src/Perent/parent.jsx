import React from 'react';
import Card from '../CARDS/card'

const CardContainer = () => {
  const cardData = [
    { title: 'Card 1', description: 'This is the first REVVS.' },
    { title: 'Card 2', description: 'This is the second card.' },
    { title: 'Card 3', description: 'This is the third card.' },
  ];

  return (
    <div>
      <h2>Card Container</h2>
      {cardData.map((data, index) => (
        <Card key={index} title={data.title} description={data.description} />
      ))}
    </div>
  );
};

export default CardContainer;
