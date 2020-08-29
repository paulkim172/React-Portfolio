import React, {Component} from 'react';

class HomeIntro extends Component {
    render() {
        return (
            <section className="hero">
                <div className="hero-content">
                    <h1 class="display-4">
                        My Name is Paul 
                    </h1>

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