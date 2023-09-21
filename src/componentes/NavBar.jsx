import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (<>
        
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Chat Bot</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Gonzalo de Rito</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
    );

}

export default NavBar;