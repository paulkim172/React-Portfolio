import React, { Component } from 'react';
import MyNameIsTextComponent from "../baseComponents/MyNameIsTextComponent.jsx";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import Greetings from '../baseComponents/Greetings.jsx';
class HomeIntro extends Component {

    // onSubmit = () => {
    //     console.log("test")
    //     return <Link to='/projects' className='link'>Projects</Link>
    // }

    render() {
        return (
            <section className="hero">
                <div className="hero-content">
                    <MyNameIsTextComponent name={"Paul"} />
                    <Greetings message={"Nice to meet you, friend."} />
                    <Link to={'/about-me'} className='link'>
                        <Button variant="primary">
                            About Me
                        </Button>
                    </Link>
                </div>
            </section>

        )
    }
}

export default HomeIntro;