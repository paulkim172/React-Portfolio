import React, { Component } from 'react';
import HomeIntro from './home-intro-section';
import HomeMenu from './home-menu-section';

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