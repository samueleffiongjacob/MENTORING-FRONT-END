import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Team = () => {
  const teamMembers = [1, 2, 3, 4, 5]; // Replace with actual data

  return (
    <Container className="py-5 text-center">
      <h2>Join Our Team</h2>
      <Row>
        {teamMembers.map((_, idx) => (
          <Col key={idx} sm={2}>
            <Image
              src={`https://via.placeholder.com/100`}
              roundedCircle
              alt="Team member"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
