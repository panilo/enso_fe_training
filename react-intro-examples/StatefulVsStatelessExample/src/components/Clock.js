import React from "react";

// A stateful component is more complex
// lifecycle is handled through different methods called in different component's life phases.
// Lifecycle methods are componentDidMount and componentWillUnmount. There're many others.
// A stateful component has a state where it can store information.
class Clock extends React.Component {
  // properties can be passed down
  constructor(props) {
    super(props);
    // state is an object has to be initialized like this
    this.state = { date: props.date != null ? props.date : new Date() };
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

export default Clock;
