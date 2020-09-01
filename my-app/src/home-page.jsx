import React, { Component } from 'react';
import HomeIntro from './sections/home-intro-section';
import HomeMenu from './sections/home-menu-section';

class Home extends Component {
    render() {
        return (
            <div>
                <HomeIntro/>
                <HomeMenu/>
            </div>
        )
    }
}
export default Home;