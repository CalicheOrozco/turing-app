import React from 'react'
// import {Link} from 'react-router-dom'
import { Navbar, Nav, Button  } from 'react-bootstrap'
import { useAuth0 } from "@auth0/auth0-react";

const NavbarComp = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant={"dark"}>
                
                    <Navbar.Brand href="#home" className="ms-lg-5">
                        <img
                        alt="Logo Turing"
                        src="/img/logo.png"
                        width="150"
                        height="50"
                        className="d-inline-block align-top"
                        />{' '}
                    
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                        <Nav.Link href="home" className="ms-lg-5 fw-bold text-light">Inicio</Nav.Link>
                        <Nav.Link href="link" className="ms-lg-5 fw-bold text-light">Contactanos</Nav.Link>
                        
                    </Nav>
                    <Nav className="ms-auto">
                        <Button onClick={() => loginWithRedirect()} variant="primary" size="lg" className="me-3">Inciar sesión</Button>
                        
                    </Nav>
                    </Navbar.Collapse>
                
                </Navbar>   
        </div>
    )
}

export default NavbarComp
