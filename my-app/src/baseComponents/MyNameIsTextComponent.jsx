import React, { Component } from 'react';

class MyNameIsTextComponent extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    // Set the state directly. Use props if necessary.
    console.log(this.props);
    this.state = {
      //  when you add the ? below
      // if the first condition is valid ( ie not undefined, null, 0, emptystring) then use first variable otherwise use second variable 
      name: this.props.name // first condition
        ? this.props.name // first condition is true then set name to this.props.name 
        : "" // if first condition is not valid then set name to empty string
    }
  }
  render() {
    const { name } = this.state;
    return (
      <h1 class="display-4">
        {`My Name is ${name}`}
      </h1>
    )
  }
}

export default MyNameIsTextComponent;