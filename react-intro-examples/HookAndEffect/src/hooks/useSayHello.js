import { useState } from "react";

// This is a custom hook
// It will handle our global state and share the stateful logic with all children-context
// components which will use this function
export function useSayHello() {
  const [sayHello, setHello] = useState("World");

  const changeHelloTo = (event) => {
    let value = event.target.value;
    setHello(value);
  };

  return { sayHello, changeHelloTo };
}
