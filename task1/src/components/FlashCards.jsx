import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

const FlashCards = () => {
  return (
    <Container className="py-5">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Awesome Flash Cards</Card.Title>
          <Card.Text>
            Fun and gamified learning tools for STEM education.
          </Card.Text>
          <Button variant="success">Purchase</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FlashCards;
