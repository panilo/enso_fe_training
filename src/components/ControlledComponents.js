import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
    // Bind class instance to the method
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(e) {
    console.log("You just submitted a form. Toggle is " + this.state.toggle);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmission}>
        <input type="text" name="name" placeholder="Name" />
        <button type="submit">Send form</button>
      </form>
    );
  }
}

class ControlledForm extends React.Component {
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
        <p>You inserted:</p>
        <p>Name: {this.state.name}</p>
        <p>Fruit: {this.state.preferredFruit}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name" // naming your form field can help during state update
            />
          </label>
          <label>
            Preferred fruit:
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
          </label>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export { Form, ControlledForm };
