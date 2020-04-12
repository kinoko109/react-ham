import React, { Component } from 'react';

const App = () => {
  return <Counter></Counter>
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  handlePlus() {
    this.setState({count: this.state.count + 1})
  }

  handleMinus() {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return(
      <>
        <div>counter:{ this.state.count }</div>
        <button onClick={this.handlePlus.bind(this)}>+</button>
        <button onClick={this.handleMinus.bind(this)}>-</button>
      </>
    );
  }
}

export default App;
