import React from "react";
import ReactDOM from "react-dom";
import { ContextProviderHello } from "./context/ContextProviderHello";
import { Header, ChangeHello } from "./component/SayHello";
import Clock from "./component/Clock";

// Notice the final app wraps all the components that need to use the global state
// in a wrapper "ProvideHello"
function App() {
  return (
    <app>
      <ContextProviderHello>
        <Header />
        <ChangeHello />
        <Clock />
      </ContextProviderHello>
    </app>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
