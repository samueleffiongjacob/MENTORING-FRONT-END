import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import '../../assets/styles/joinTeam.css';

// Import images
import Ellipse1 from '../../assets/img/ellipse/ecllipse1.png';
import Ellipse2 from '../../assets/img/ellipse/ellipse2.png';
import Ellipse3 from '../../assets/img/ellipse/ellipse3.jpg';
import Ellipse4 from '../../assets/img/ellipse/ellipse4.png';
import Ellipse5 from '../../assets/img/ellipse/ellipse5.png';
import Ellipse6 from '../../assets/img/ellipse/ellipse6.png';
import Ellipse7 from '../../assets/img/ellipse/ellipse7.png';
import Ellipse8 from '../../assets/img/ellipse/ellipse8.png';
import Ellipse9 from '../../assets/img/ellipse/ellipse9.png';
import Ellipse10 from '../../assets/img/ellipse/ellipse10.png';
import Ellipse11 from '../../assets/img/ellipse/ellipse11.png';

const imageRows = [
  [Ellipse1, Ellipse2, Ellipse3, Ellipse4, Ellipse5],
  [Ellipse6, Ellipse7, Ellipse8, Ellipse9, Ellipse10, Ellipse11],
];

const JoinTeamSection = () => {
  return (
    <section id="nine">
      <Container className="pt-5">
        <Row className="nine p-4 align-items-center">
          {/* Left Column */}
          <Col md={4} sm={12} className="text-center text-md-start mb-4 mb-md-0">
            <h4 className="join">Join our team</h4>
            <p className="join-paragraph">
              Join our professional network of instructors,<br />
              parents & guardians
            </p>
            <Button variant="dark">Join the team</Button>
          </Col>

          {/* Right Column */}
          <Col md={8} sm={12} className="d-flex flex-column">
            <div className="image-container">
              {imageRows.map((row, rowIndex) => (
                <div
                  key={`row-${rowIndex}`}
                  className={`d-flex justify-content-center row-${rowIndex}`}>
                  {row.map((imageSrc, imageIndex) => (
                    <Image
                      key={`img-${rowIndex}-${imageIndex}`}
                      src={imageSrc}
                      alt={`Ellipse ${imageIndex + 1}`}
                      height="70"
                      width="70"
                      className="rounded-circle img-fluid m-2"
                    />
                  ))}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JoinTeamSection;
