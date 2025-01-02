import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import UpperImg from '../../assets/img/smallCards/upperCardimg.jpeg';
import '../../assets/styles/uppercomponent.css';

const TopCard = () => {
  return (
    <Row className="build align-items-center mb-4">
      {/* Image Section */}
      <Col xs={3} className="build-img text-center">
        <Image
          src={UpperImg} // Replace with the actual image path
          alt="Build mobile apps with Adalo"
          height="56.33"
          width="56.33"
          className="rounded-circle img-fluid"
        />
      </Col>

      {/* Text Section */}
      <Col xs={9} className="text">
        <h4 className="text-heading">Build mobile apps with Adalo</h4>
        <p className="text-para">
          Let's learn to build simple apps daily<br /> for a month (Training for kids)
        </p>
      </Col>
    </Row>
  );
};

export default TopCard;
