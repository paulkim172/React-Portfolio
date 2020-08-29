import React, {Component} from 'react';

class Greetings extends Component {
    constructor(props){
        super(props);

        this.state = {
            message: this.props.message ? this.props.message: "",
        }
    }

    render() {
        const { message } = this.state;
        return (
            <h2 className="lead">
                { message }
            </h2>
        )
    }
}

export default Greetings;