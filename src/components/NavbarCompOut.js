import React from 'react'
import { Navbar, Nav, NavDropdown  } from 'react-bootstrap'
import { useAuth0 } from "@auth0/auth0-react";

const NavbarCompOut = () => {
    const { logout, user } = useAuth0();
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
                        <Nav.Link href="#home" className="ms-lg-5 fw-bold text-light">Oficial</Nav.Link>
                        <Nav.Link href="#link" className="ms-lg-5 fw-bold text-light">Operador</Nav.Link>
                        <Nav.Link href="#link" className="ms-lg-5 fw-bold text-light">Civil</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                    <img className=" profile-img" src={user.picture} alt={user.name} />
                    <NavDropdown title={user.name} id="basic-nav-dropdown" className="me-3 fw-bold text-light">
                        <NavDropdown.Item href="#action/3.1">Dashboard</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Oficial</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Operador</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Civil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="fw-bold text-danger" onClick={() => logout()}>Cerrar sesión</NavDropdown.Item>
                        
                        
                        </NavDropdown>
                        
                        
                        
                    </Nav>
                    </Navbar.Collapse>
                
                </Navbar>   
        </div>
    )
}

export default NavbarCompOut
