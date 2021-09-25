import React, { createContext, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";

function HookExample() {
  // Declare a new state variable, count.
  // The useState function will return the initial value for the state and a function we can use to update it, setCount.
  // Similar to this.setState but without an actual class.
  // The state here can be whatever we want, a simple integer, a string or an object.
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate
  // manage the lifecycle.
  // When you call the useEffect you tell React to run your "effects"
  // after changes have been made to the DOM.
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// This is a custom hook
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser("user");
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
}

// This component will use the custom hook useProvideAuth
// and will share the make possible to share the state among all the children components.
// In order to share the state we need a context, a state-wrapper for components.
const authContext = createContext();
function ProvideAuth(props) {
  const auth = useProvideAuth();
  return (
    // Use the context to provide what? authentication as auth
    <authContext.Provider value={auth}>{props.children}</authContext.Provider>
  );
}

// To use the state in children components we need also a function to return the current context
// The function will be a custom hook.
function useAuth() {
  return useContext(authContext);
}

function App() {
  const auth = useAuth();

  return (
    <div>
      {auth.user !== null ? (
        <h1>You logged in</h1>
      ) : (
        <button onClick={() => auth.login()}>Login now</button>
      )}
    </div>
  );
}

function ShowLoginStatus() {
  const auth = useAuth();

  return auth.user ? <h1>Logged in</h1> : <h1>Logged out</h1>;
}

ReactDOM.render(
  <div>
    <ProvideAuth>
      <ShowLoginStatus />
      <App />
    </ProvideAuth>
  </div>,
  document.getElementById("root")
);
