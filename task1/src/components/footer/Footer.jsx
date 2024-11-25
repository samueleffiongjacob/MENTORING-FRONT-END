import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="bg-light py-3">
      <Row>
        <Col className="text-center">
          <p>&copy; 2024 KidsCoders. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
