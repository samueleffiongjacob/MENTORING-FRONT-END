import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import LaptopImage from "../../assets/img/more.jpeg";
import SecondImage from "../../assets/img/more1.png";
import "../../assets/styles/MoreSection.css"; // Custom styles

const MoreSection = () => {
  return (
    <section id="eleven">
      <Container>
        <Row className="pt-5 pb-5">
          {/* First Column */}
          <Col md={6} className="">
            <Card className="more-1 bg-dark">
              <Card.Body className="mor">
                <h6 className="card-title more-head text-white">DO MORE</h6>
                <p className="card-text more-txt text-white">
                  Virtual Education that makes a <br /> difference
                </p>
              </Card.Body>
              <div className="card-img">
                <Image
                  src={LaptopImage}
                  alt="Do More"
                  className="img-fluid"
                />
              </div>
            </Card>
          </Col>

          {/* Second Column */}
          <Col md={6}>
            <Card className="be-more">
              <Card.Body className="more-2">
                <h6 className="card-title more-head">BE MORE</h6>
                <p className="card-text more-txt">
                We create the perfect virtual <br /> learning experience.
                </p>
              </Card.Body>
              <div className="card-img">
                <Image
                  src={SecondImage}
                  alt="Be More"
                  className="img-fluid"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MoreSection;
