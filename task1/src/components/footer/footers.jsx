import React from "react";
import { NavLink } from "react-router-dom";
import Group from "../../assets/img/Group.svg";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import SocialMediaBar from "../SOCIALMeadia/social";
import SubscribeForm from "../form/form";
import "../../assets/styles/footers.css"
import "../../assets/styles/Socialfooter.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-start py-4">
          {/* Logo and Social Media */}
          <Col md={4} >
            <Navbar.Brand as={NavLink} to="/" className="branded">
              <img src={Group} className="img-fluid logo-img" alt="Logo" />
            </Navbar.Brand>
            <div className="social-media">
              <SocialMediaBar />
            </div>
          </Col>

          {/* Company Links */}
          <Col md={2} >
            <h6 className="footer-heading">Company</h6>
            <Nav className="flex-column">
              <Nav.Link href="#about" className="footer-link">
                About Us
              </Nav.Link>
              <Nav.Link href="#contact" className="footer-link">
                Contact Us
              </Nav.Link>
              <Nav.Link href="#faq" className="footer-link">
                FAQ
              </Nav.Link>
              <Nav.Link href="#platforms" className="footer-link">
                Platforms
              </Nav.Link>
            </Nav>
          </Col>

          {/* Product Links */}
          <Col md={2} >
            <h6 className="footer-heading">Product</h6>
            <ul className="flex-column list-unstyled">
              <li className="footer-link text-me">Learning Hub</li>
              <li className="footer-link text-me">Shops</li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col md={4}>
            <h6 className="footer-heading">Newsletter</h6>
            <SubscribeForm />
            <p className="footer-link text-me">
              Get a summary of what we have shipped, behind the scenes updates, and team picks. Unsubscribe at any time.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
