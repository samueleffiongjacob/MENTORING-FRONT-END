import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../assets/styles/getstarted.css";
import avatar1 from "../../assets/img/avata/avatar1.png"; 
import avatar2 from "../../assets/img/avata/avatar2.png";
import avatar3 from "../../assets/img/avata/avatar3.png"; 
import avatar4 from "../../assets/img/avata/avatar4.png";
import avatar5 from "../../assets/img/avata/avatar5.png";


const BlackAndWhite = () => {
  return (
    <div>
      {/* White Section */}
      <div>
        <Container className="white-section">
          <Row className="align-items-center bg-white white-row">
            <Col md={6}>
              <h3 className="white-title p-3">
                Unleash their creativity with <br />
                <span className="highlight"> coding, stem & soft skills</span>
              </h3>
            </Col>
            <Col md={6}>
              <p className="white-description p-3">
                We prepare young minds for an innovative future by igniting
                imagination, fostering essential soft skills, and providing
                engaging hands-on learning experiences in coding, STEM, and
                interactive classes.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Black Section */}
      <div>
        <Container className="black-section">
          <Row className="align-items-center black-row">
            <Col md={5}>
              <h2 className="black-title">Join our students</h2>
              <p className="black-description">Building NEXT GEN Innovators</p>
              <Button className="black-btn" variant="outline-light" id="get">Get Started</Button>
            </Col>
            <Col md={7} className="avatars-row">
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
