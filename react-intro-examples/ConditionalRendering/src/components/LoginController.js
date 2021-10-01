import React from "react";

class LoginController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({ loggedIn: true });
  }

  handleLogout() {
    this.setState({ loggedIn: false });
  }

  render() {
    // If logged in display Welcome user otherwise Please login
    let greetings = <h1></h1>;
    if (this.state.loggedIn) {
      greetings = <h1>Welcome user!</h1>;
    } else {
      greetings = <h1>Please login</h1>;
    }
    // If logged in display the avatar
    return (
      <div>
        {greetings}
        {this.state.loggedIn == true && (
          <p>
            <img src="https://www.gravatar.com/avatar/0" />
          </p>
        )}
        {
          // Buttons Login / Logout
          this.state.loggedIn ? (
            <button onClick={this.handleLogout}>logout</button>
          ) : (
            <button onClick={this.handleLogin}>login</button>
          )
        }
      </div>
    );
  }
}

export default LoginController;
