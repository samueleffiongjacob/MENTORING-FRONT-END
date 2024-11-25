import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import "../assets/styles/getstarted.css";
import avatar1 from "../assets/img/avata/avatar1.png"; // Replace with actual image path
import avatar2 from "../assets/img/avata/avatar2.png"; // Replace with actual image path
import avatar3 from "../assets/img/avata/avatar3.png"; // Replace with actual image path
import avatar4 from "../assets/img/avata/avatar4.png"; // Replace with actual image path
import avatar5 from "../assets/img/avata/avatar5.png";

const BlackAndWhite = () => {
  return (
    <div>
      {/* White Section */}
      <div className="white-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="white-title">
                Unleash their creativity with
                <span className="highlight"> coding, stem & soft skills</span>
              </h1>
              <p className="white-description">
                We prepare young minds for an innovative future by igniting
                imagination, fostering essential soft skills, and providing
                engaging hands-on learning experiences in coding, STEM, and
                interactive classes.
              </p>
            </Col>
            <Col md={6}></Col>
          </Row>
        </Container>
      </div>

      {/* Black Section */}
      <div className="black-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="black-title">Join our students</h2>
              <p className="black-description">Building NEXT GEN Innovators</p>
              <Button className="black-btn">Get Started</Button>
            </Col>
            <Col md={6} className="avatars-row">
              <img src={avatar1} alt="Avatar 1" className="avatar" />
              <img src={avatar2} alt="Avatar 2" className="avatar" />
              <img src={avatar3} alt="Avatar 3" className="avatar" />
              <img src={avatar4} alt="Avatar 4" className="avatar" />
              <img src={avatar5} alt="Avatar 5" className="avatar" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BlackAndWhite;
