import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container,} from 'react-bootstrap';
import '../../assets/styles/Navsstyle.css'
import Group from '../../assets/img/Group.svg'
import CustomButton from '../button/button'

const Header = () => {
    return (
        <div className='Navsstyle'>
            {/* Navbar */}
            <Navbar className='CustomNavbar' bg="white" expand='lg'>
                <Container>
                    <Navbar.Brand as={NavLink} to="/" className='branded'>
                        <img src={Group} className='img-fluid img' alt='Group'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link as={NavLink} to="/" className={({ isActive }) => isActive ? "active" : ""}>
                                Blog
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/Platform" className={({ isActive }) => isActive ? "active" : ""}>
                                Platform
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/Resource" className={({ isActive }) => isActive ? "active" : ""}>
                                Resource
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/Scholarships" className={({ isActive }) => isActive ? "active" : ""}>
                                Scholarships
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/shop" className={({ isActive }) => isActive ? "active" : ""}>
                                Shop
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/FAQ" className={({ isActive }) => isActive ? "active" : ""}>
                                FAQ
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/register" className={({ isActive }) => isActive ? "active" : ""}>
                                {/* REUSABLE BUTTON */}
                                <CustomButton variant="primary">Get Started</CustomButton> 
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                    
        </div>
    )
}

export default Header;