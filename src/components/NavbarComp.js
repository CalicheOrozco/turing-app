import React from 'react'
import { Navbar, Nav, Button  } from 'react-bootstrap'
import { useAuth0 } from "@auth0/auth0-react";

const NavbarComp = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant={"dark"}>
                
                    <Navbar.Brand href="#home">Turing</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Dashboard</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Button onClick={() => loginWithRedirect()} variant="primary" size="lg" className="me-2">Log in</Button>
                        
                    </Nav>
                    </Navbar.Collapse>
                
                </Navbar>   
        </div>
    )
}

export default NavbarComp
