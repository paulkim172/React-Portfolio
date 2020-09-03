import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

class Header extends Component {
    render () {
        return(
            <Navbar bg="light" expand="lg">
    <Navbar.Brand>Paul Kim's Portfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
        <Nav.Link><Link to="/" className="link">Home</Link></Nav.Link>
        <Nav.Link><Link to="/about-me" className="link">About Me</Link></Nav.Link>
        <NavDropdown title="My Portfolio" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to='/portfolio' className='link'>Projects</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Miscellaneous</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://github.com/paulkim172">GitHub</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        </Form>
    </Navbar.Collapse>
    </Navbar>
        )
    }
}

export default Header;