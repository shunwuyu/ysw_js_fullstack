import React from './react';
import ReactDOM from './react-dom';

class Counter extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
      Counter
      </div>
    )
  }
}

const element = (
  <div>
    <h1>Hello, World!</h1>
    <Counter />
    <Counter />
    <h2>It is { new Date().toLocaleTimeString()}.</h2>
  </div>
);
ReactDOM.render(
  element,
  document.getElementById('root')
)


// setInterval(tick, 1000);