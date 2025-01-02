import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Education from '../../assets/img/magazinesImg/education.png';
import '../../assets/styles/Books.css';

const Book2 = () => {
  return (
  <div className="all-card magazine2">
    <Container fluid className="p-4">
      <Row className=" align-items-center">
          {/* Image Column */}
          <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
            <div className="img-wrapper">
              <img
                src={Education}
                alt="Creative Books"
                className="img img-fluid rounded mx-auto d-block"
              />
            </div>
          </Col>

          {/* Content Column */}
          <Col xs={12} 
               md={6} 
               className="d-flex flex-column align-items-center align-items-md-start education-text text-center text-md-start px-3 px-md-4"
              >
            <h3 className="fw-bold fs-4 mb-3">
              Educational Books <br /> Teaching Tech, Business,<br />Economics & Skills
            </h3>
            <p className='magazine-writeup mb-4'>
              We prepare young minds for an innovative<br />by igniting imagination fostering <br />
              essential soft skills, and providing engaging <br />
              hands on learning experiences in coding, stem<br />
              and interactive classes.
            </p>
            <div className="button-wrapper">
              <Button className="px-4 py-2 mt-3" variant="dark">Purchase</Button>
            </div>
          </Col>
      </Row>
    </Container>
  </div>
  );
};

export default Book2;
