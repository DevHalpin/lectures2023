import React from 'react';
import Child from './Child';

const Props = class extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World",
      count: 15
    }
  }

  render() {
    return (
      <div className="props">
        <Child message={this.state.message} count={this.state.count}>
          <p>Hello, I am a children! </p>
        </Child>
      </div>
    )
  }
}

export default Props;