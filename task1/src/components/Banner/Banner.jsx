import React from 'react';
import { Container } from 'react-bootstrap';
import CustomButton from '../button/button';
import "../../assets/styles/SocialMediaBar.css"; 
import SocialMediaBar from '../SOCIALMeadia/social';
import "../../assets/styles/Banner.css"
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    // className="text-center py-5 container-custom" for container
    <Container>
      {/* Heading */}
      <div className="banner">
        {/* Social Media Bar */}
        <div className="social">
          <SocialMediaBar />
        </div>

        <h1 className="h1">
          Sparking their <br/> <span className="highlight">curiosity</span> &{" "}
          creativity.
        </h1>

        {/* Description */}
        <div className="container-description">
          <p className="description">
            We prepare young minds for an innovative future by igniting
            imagination, fostering essential soft skills, and providing engaging
            hands-on learning experiences in coding, STEM, and interactive
            classes.
          </p>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="button-container">
        <Link to="/register">
          <CustomButton variant="primary">Get Started</CustomButton> 
        </Link>
      </div>
    </Container>
  );
};

export default Banner;
