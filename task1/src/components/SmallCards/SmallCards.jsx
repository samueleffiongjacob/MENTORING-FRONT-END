import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import TopCard from "../TopSmallCards/UpperComponents";
import Build1 from "../../assets/img/smallCards/build1.jpeg";
import Build2 from "../../assets/img/smallCards/build2.jpeg";
import Build3 from "../../assets/img/smallCards/build3.jpeg";
import Build4 from "../../assets/img/smallCards/build4.jpeg";
import Build5 from "../../assets/img/smallCards/build5.jpeg";
import Build6 from "../../assets/img/smallCards/build6.jpeg";
import '../../assets/styles/SmallCards.css';

const BuildSmallCards = () => {
    return (
        <div>
            <Container>
                <h2 className="txt">Courses Portal<span className="soon">(Coming Soon)</span></h2>
                <p className="promise">Promising up-and-coming extensions to try out</p>
                <Row>
                    {[Build1, Build2, Build3, Build4, Build5, Build6].map((image, index) => (
                        <Col md={4} key={`build-${index}`} className="mb-4">
                            <Card className="smallcard">
                                <Card.Body>
                                    <TopCard />
                                    <Image
                                        src={image}
                                        alt={`build${index + 1}`}
                                        className="rounded img-fluid build-img"
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default BuildSmallCards;
