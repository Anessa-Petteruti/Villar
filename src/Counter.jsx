import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    };
    
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount = () => {
        this.setState({
          count: this.state.count + 1
        });
    
  };
  

  render() {
    return (
      <div className="counter">
      
        <div>{this.state.count}</div>

        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}

export default Counter;
