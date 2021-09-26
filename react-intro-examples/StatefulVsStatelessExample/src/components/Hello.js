import React from "react";

// A stateless component is a function.
// No lifecycle is managed neither information stored.
// You can pass properties to the function, hence the component.
export default function Hello(props) {
  return (
    <div>
      <h2>Hello {props.name}, I'm a function component</h2>
      {props.children}
    </div>
  );
}
