import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from 'react-router-dom';

function Header() {
    
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#home">Sales App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className='nav-link'>Home</Link>
                        <Link to='/products' className='nav-link'>Products</Link>
                        <Link to='/dashboard' className='nav-link'>Dashboard</Link>
                        <Link to='/login' className='nav-link'>Login</Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;