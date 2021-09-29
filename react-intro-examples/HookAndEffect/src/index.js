import ReactDOM from "react-dom";
import { useContext, createContext, useState } from "react";

// This is a custom hook
// It will handle our global state and share the stateful logic with all children-context
// components which will use this function
function useHello() {
  const [hello, setHello] = useState("World");

  const changeHelloTo = (event) => {
    let value = event.target.value;
    setHello(value);
  };

  return { hello, changeHelloTo };
}

// This is a context creation: context will allow to provide a state for children component
const helloContext = createContext();

// This component will create the context provider for children component
// letting us use the custom hook useHello and will make possible to share
// the state among all the children components.
// In order to share the state we need a context, a state-wrapper for components.
function ProvideHello(props) {
  const helloHook = useHello();
  return (
    <helloContext.Provider value={helloHook}>
      {props.children}
    </helloContext.Provider>
  );
}

// The next two components will just display an header and an input field
function Header() {
  const hello = useContext(helloContext);

  return <h1>Hello {hello.hello}!</h1>;
}

function ChangeHello() {
  const hello = useContext(helloContext);

  return <input type="text" onChange={(e) => hello.changeHelloTo(e)} />;
}

// Notice the final app wraps all the components that need to use the global state
// in a wrapper "ProvideHello"
function App() {
  return (
    <app>
      <ProvideHello>
        <Header />
        <ChangeHello />
      </ProvideHello>
    </app>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
