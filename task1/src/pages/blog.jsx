import React from "react"; 
import { Row, Col, Container } from "react-bootstrap";
import myImage from "../assets/img/myImage.png";
// import "../assets/styles/Blog.css";
// import SocialMediaBar from '../components/SOCIALMeadia/social';
import Banner from "../components/Banner/Banner";
import CardSection from "../components/Cards/CardRender";
import Merch from "../components/MerchandiseCategory/Merchandise";
import BlackAndWhite from '../components/GetStarted/getstarted'
import Books from "../components/Books/Book";
import JoinTeamSection from "../components/JoinTeam/JoinTeam";
import BuildSmallCards from "../components/SmallCards/SmallCards";
import MoreSection from "../components/More/More";
import OtherCard from "../components/joinOthers/joinOthers";
import BaseCode from "../components/footer/footers"

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
        
        <Row className="mb-4">
          <Col xs={12}>
            <BlackAndWhite />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12}>
            <CardSection />
          </Col>
        </Row>


        <Row className="mb-4">
          <Col xs={12}>
              <Merch />
            </Col>
        </Row>

        {/* Books Row with spacing and full width */}
        <Row className="w-100 mb-4">
          <Col xs={12}>
            <Books />
          </Col>     
        </Row>

        <Row className="mb-4">
          <Col xs={12}>
            <JoinTeamSection />
          </Col>
        </Row>
        
        <Row className="mb-4">
          <Col xs={12}>
            <BuildSmallCards />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12}>
            <MoreSection />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12}>
            <OtherCard />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12}>
            <BaseCode />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
