import React from "react";

// This component is a controlled component:
// a stateful form, its state contains the inputs value.
export default class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", preferredFruit: "grapefruit" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      "You submitted: " + this.state.name + " - " + this.state.preferredFruit
    );
  }

  render() {
    return (
      <div>
        <h1>Controlled Form</h1>
        <div class="highlight">
          You inserted:
          <br />
          Name: {this.state.name}
          <br />
          Fruit: {this.state.preferredFruit}
        </div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Name:</label>
            <br />
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name" // naming your form field can help during state update
            />
          </p>
          <p>
            <label>Preferred fruit:</label>
            <br />
            <select
              value={this.state.preferredFruit}
              onChange={this.handleChange}
              name="preferredFruit"
            >
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </p>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
