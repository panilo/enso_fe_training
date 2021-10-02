import React, { useEffect } from "react";
import { useContextHello } from "../context/ContextProviderHello";

// The next two components will just display an header and an input field
export function Header() {
  const hello = useContextHello();

  return <h1>Hello {hello.sayHello}!</h1>;
}

export function ChangeHello() {
  const hello = useContextHello();

  useEffect(() => {
    document.title = `Hello ${hello.sayHello}`;
    console.log("Changed page title");
  });

  return <input type="text" onChange={(e) => hello.changeHelloTo(e)} />;
}
