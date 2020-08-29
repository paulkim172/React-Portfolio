import React, { Component } from 'react';
import MyNameIsTextComponet from "./baseComponents/MyNameIsTextComponet.jsx";
class HomeIntro extends Component {
    render() {
        return (
            <section className="hero">
                <div className="hero-content">
                    <MyNameIsTextComponet name={"Paul"} />

                    <h2 class="lead">
                        Nice to Meet You
                    </h2>

                    <button type="button" class="hero-button">
                        About Me
                    </button>
                </div>
            </section>

        )
    }
}

export default HomeIntro;