import React, { Component } from 'react';
import MyNameIsTextComponet from "./baseComponents/MyNameIsTextComponet.jsx";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
class HomeIntro extends Component {

    // onSubmit = () => {
    //     console.log("test")
    //     return <Link to='/projects' className='link'>Projects</Link>
    // }

    render() {
        return (
            <section className="hero">
                <div className="hero-content">
                    <MyNameIsTextComponet name={"Paul"} />
                    <h2 class="lead">
                        Nice to Meet You
                    </h2>
                    <Link to={'/projects'} className='link'>
                        <Button variant="primary">
                            Projects
                        </Button>
                    </Link>
                </div>
            </section>

        )
    }
}

export default HomeIntro;