import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'


export default function Header() {
    return (
        <>
            {/* <nav>

                <ul>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>

                    <li>
                        <NavLink to="/product">Product</NavLink>
                    </li>




                </ul>

            </nav> */}

            <Navbar expand="lg" className="bg-body-tertiary fixed-top">
                <Container>
                    <Navbar.Brand href="#home"className='text-white'>Shopy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link >  <NavLink to="/home">Home</NavLink></Nav.Link>
                            <Nav.Link> <NavLink to="/about">About</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/product">Product</NavLink></Nav.Link>
                          
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




        </>
    )
}
