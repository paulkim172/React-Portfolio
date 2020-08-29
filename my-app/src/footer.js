import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';


class Footer extends Component {
    render () {
        return (
            <footer className="border-top">
            <div className="pb-6"><Col md={{ span: 6, offset: 3 }}>
                <Row className = "py-5 justify-content-md-center">
                        <Col xs={12} md={4}>
                            <h5>My Portfolio</h5>
                            <Nav className ="justify-content-center">
                                <ul className="list-unstyled">
                                    <li className="mr-auto"><Link to="/projects" className="link">Projects</Link></li>
                                    <li className="mr-auto">Contributions</li>
                                    <li className="mr-auto">Miscellaneous</li>
                                </ul>
                            </Nav>
                        </Col>
                        <Col xs={12} md={4}>
                            <h5>About Me</h5>
                            <Nav className ="justify-content-center">
                                <ul className="list-unstyled">
                                    <li className="mr-auto">About Me</li>
                                    <li className="mr-auto">Resume</li>
                                    <li className="mr-auto">Roadmap</li>
                                    
                                </ul>
                            </Nav>
                        </Col>
                        <Col xs={12} md={4}>    
                            <h5>Contact Me</h5>
                            <Nav className ="justify-content-center">
                                <ul className="list-unstyled">
                                    <li className="mr-auto">LinkedIn</li>
                                    <li className="mr-auto">Email:</li>
                                    <li className="mr-auto">Phone:</li>
                                </ul>
                            </Nav>
                        </Col>
                    </Row>
                </Col>
            </div>  
            </footer>
        )
    }
}

export default Footer;