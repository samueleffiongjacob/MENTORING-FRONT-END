import React from "react"; 
import { Row, Col, Container } from "react-bootstrap";
import myImage from "../assets/img/myImage.png";
import "../assets/styles/Blog.css";
// import SocialMediaBar from '../components/SOCIALMeadia/social';
import Banner from "../components/Banner";
import BlackAndWhite from '../components/getstarted'

const Blog = () => {
  return (
    <div>
      <Container className="container-custom">
        <Row className="d-flex align-items-center">
          {/* First Column: Banner */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Banner />
          </Col>
          
          {/* Second Column: Image */}
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <img src={myImage} className="img-fluid responsive-img" alt="myImage" />
          </Col>
        </Row>
        
        <BlackAndWhite />
      </Container>
    </div>
  );
};

export default Blog;
