import React from 'react'
import { Navbar, Nav, Button, NavDropdown  } from 'react-bootstrap'
import { useAuth0 } from "@auth0/auth0-react";

const NavbarCompOut = () => {
    const { logout, user } = useAuth0();
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant={"dark"}>
                
                    <Navbar.Brand href="#home">Turing</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <img className=" profile-img" src={user.picture} alt={user.name} />
                    <NavDropdown title={user.name} id="basic-nav-dropdown" className="me-3">
                        <NavDropdown.Item href="#action/3.1">Dashboard</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Link</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => logout()}>Log Out</NavDropdown.Item>
                        
                        
                        </NavDropdown>
                        
                        
                        
                    </Nav>
                    </Navbar.Collapse>
                
                </Navbar>   
        </div>
    )
}

export default NavbarCompOut
