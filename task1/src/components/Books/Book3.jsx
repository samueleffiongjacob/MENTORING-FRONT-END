import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import flash from '../../assets/img/magazinesImg/flash.png';
import '../../assets/styles/Books.css';

const Book3 = () => {
    return (
        <div className="all-card magazine3">
            {/* third Book */}
            <Container fluid className="p-4">
                <Row className="align-items-center g-4">
                    {/* Content Column */}
                    <Col xs={12} 
                        md={6} 
                        className="magazine-text d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-3 px-md-4"
                        >
                    <h3 className="fw-bold fs-4 mb-3" >Awesome educational<br/> flash cards with gamified<br/> learning concepts</h3>
                        <p className="magazine-writeup mb-4">
                            We prepare young minds for an innovative<br/>by igniting imagination fostering <br/>
                         essential soft skills,and providing engaging <br/>
                         hands-on learning experience in coding,STEM
                        <br/> and interactive classes.
                        </p>
                        <div className="button-wrapper">
                            <Button variant='dark' className="px-4 py-2 mt-3">Purchase</Button>
                        </div>
                    </Col>

                    {/* Image Column */}
                    <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
                        <div className="img-wrapper">
                        <img
                            className="img img-fluid rounded mx-auto d-block"
                            src={flash}
                            alt="Flash card"
                        />
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Book3;
