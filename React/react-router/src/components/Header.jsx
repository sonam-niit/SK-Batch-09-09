import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function Header({login,setLogin}) {
    const navigate= useNavigate();
    const handleLogout=()=>{
        setLogin(null);
        navigate('/login');
    }
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#home">Sales App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className='nav-link'>Home</Link>
                        <Link to='/addsale' className='nav-link'>Add Sales</Link>
                        <Link to='/top5' className='nav-link'>Top 5 Sales</Link>
                        <Link to='/revenue' className='nav-link'>Total Revenue</Link>
                        {
                            login? 
                            <button className='nav-link' onClick={handleLogout}>Logout</button> : <> 
                            <Link to='/login' className='nav-link'>Login</Link>
                            <Link to='/register' className='nav-link'>Register</Link> </>
                        }
                        
                        { login?<Nav.Link>Welcome {login.name}</Nav.Link>:''}
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;