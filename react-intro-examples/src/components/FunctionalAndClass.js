// ## Function component & Class components ##
import React from "react";

function FunctionComponent(props) {
  return <h2>Hello {props.name}, I'm a function component</h2>;
}

function ReturnChildrenComponent(props) {
  return <div>{props.children}</div>;
}

class ClassComponent extends React.Component {
  // properties can be passed down
  constructor(props) {
    super(props);
    // state is an object has to be initialized like this
    this.state = { date: props.date };
  }

  // This function ticks the clock moving forward the time, has to be called every 1 sec
  tick() {
    // The correct way of setting the state is the following (un-commented)
    // this is wrong --> this.state.something = newValue
    this.setState({ date: new Date() });
  }

  // We can call the tick function just after the element returned from render has been place in the DOM
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  // The render method returning an element
  render() {
    // state is used to get last date
    return <h2>It's {this.state.date.toLocaleTimeString()}</h2>;
  }

  // In case the component is destroyed (e.g. page has changed) free up resources
  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

export { FunctionComponent, ClassComponent, ReturnChildrenComponent };
