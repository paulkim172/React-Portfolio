import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


class HomeMenu extends Component {
    render() {
        return (
            <section className="home-menu">
                <div className="home-menu-content">
                    <Col xs={{ span: 6, offset: 3 }}>
                        <Row>
                            <Col xs={12} md={4}>
                                <Card className="menu-card">
                                    <Card.Header>
                                        <Card.Title>My Work</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            My work collection, including personal projects
                                        </Card.Text>
                                        <Link to="/projects">
                                            <Button variant="primary">Go to Portfolio</Button>  
                                        </Link>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={4}>
                                <Card className="menu-card">
                                    <Card.Header>
                                        <Card.Title>About Me</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            A little more about who I am and what I look forward to.
                                        </Card.Text>
                                        <Link to="/about-me">
                                            <Button variant="primary">Go to About Me</Button>   
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={4}>
                                <Card className="menu-card">
                                    <Card.Header>
                                        <Card.Title>Contact Me</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            Accounts I have you can contact me in.
                                        </Card.Text>
                                        <Link to="/contact-me">
                                            <Button className="menu-button" variant="primary">Go to Contact Me</Button>
                                        </Link>
                                    </Card.Body>
                                    
                                </Card>
                            </Col>
                        </Row>
                    </Col>                   
                </div>
            </section>
        )
    }
}

export default HomeMenu;