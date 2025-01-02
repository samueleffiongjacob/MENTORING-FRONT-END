import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../../assets/styles/joinOthers.css';

const OtherCard = () => {
    return (
        <div>
            <Container className="joinOthers p-5">
                <h2 class="text-center amazing">Join other <br/> amazing students</h2>
                <Row className="">
                    <Col md={6}>
                        <p className="other-text text-white">Get ready for exciting exploration of the real world! Dive<br/>
                            deep into fascinating concept andexplore their implications.<br/>
                            Discover new insights and gain a deeper understanding of the<br/> world around you.
                        </p>
                        <p className="other-text text-white">Enjoy a fun and enlightening journey into the depth of the <br/>unknown!<br/>
                            In their weekly classes, students play interactive game to <br/>
                            explore real world concept that are often not taught in the <br/>
                            regular school system
                        </p>
                    </Col>
                    <Col md={6}>
                    <p className="other-text text-white">Get ready for exciting exploration of the real world! Dive<br/>
                            deep into fascinating concept andexplore their implications.<br/>
                            Discover new insights and gain a deeper understanding of the<br/> world around you.
                        </p>
                        <p className="other-text text-white">Enjoy a fun and enlightening journey into the depth of the <br/>unknown!<br/>
                            In their weekly classes, students play interactive game to <br/>
                            explore real world concept that are often not taught in the <br/>
                            regular school system
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default OtherCard;