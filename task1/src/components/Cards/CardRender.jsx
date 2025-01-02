import React from "react";
import Card from "./Cards";
import { Container, Col, Row } from "react-bootstrap";
import '../../assets/styles/CardRender.css';
import stemEducation from '../../assets/img/Cards/stemEducation.png';
import Appdev from '../../assets/img/Cards/applicationDevelopment.png';
import Softskill from '../../assets/img/Cards/softSkillEducation.png';
import ProgramImage from '../../assets/img/Cards/programLogic.png';
import ArtImg from '../../assets/img/Cards/creativeArt.png';
import GameImg from '../../assets/img/Cards/game.png';



// Section Component
const CardSection = () => {
  return (
    <Container className="card-container">
      <h1 className="card-heading text-center">
        Deep dive into real<br />world concepts
      </h1>
      
      <Row className="row row-1">
        <Col md={6}>
          <Card 
            title="STEM" 
            subtitle="Education" 
            imgSrc={stemEducation} 
            imgAlt="Pupil"  
            cardClass="one" 
          />
        </Col>
        <Col md={6}>
          <Card 
            title="Application" 
            subtitle="Development" 
            imgSrc={Appdev}
            imgAlt="Phone"  
            cardClass="two" 
          />
        </Col>
      </Row>

      <Row className="row row-2 pt-5">
        <Col md={6}>
          <Card 
            title="Soft Skills" 
            subtitle="Education" 
            imgSrc={Softskill} 
            imgAlt="Pupil" 
            cardClass="three" 
          />
        </Col>
        <Col md={6}>
          <Card 
            title="Programming" 
            subtitle="& Logic" 
            imgSrc={ProgramImage} 
            imgAlt="Laptop" 
            cardClass="four" 
          />
        </Col>
      </Row>

      <Row className="row row-3 pt-5">
        <Col md={6}>
          <Card 
            title="Creative Arts" 
            subtitle="& Designs" 
            imgSrc={ArtImg} 
            imgAlt="Creative"  
            cardClass="five" 
          />
        </Col>
        <Col md={6}>
          <Card 
            title="Game" 
            subtitle="Development" 
            imgSrc={GameImg}
            imgAlt="Game"  
            cardClass="six" 
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CardSection;
