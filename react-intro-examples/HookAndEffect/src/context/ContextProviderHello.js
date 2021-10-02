import React, { useContext, createContext } from "react";
import { useHello } from "../hooks/useHello";

// This is a context creation: context will allow to provide a state for children component
const helloContext = createContext();

// In order to share the state we need a context, a state-wrapper for components.
// This component will create the context provider for children component
// letting us use the custom hook useHello and will make possible to share
// the state among all the children components.
export function ContextProviderHello(props) {
  const helloHook = useHello();
  return (
    <helloContext.Provider value={helloHook}>
      {props.children}
    </helloContext.Provider>
  );
}

// This function is an hook and will be used in children components to get the latest context value (latest state)
export function useContextHello() {
  return useContext(helloContext);
}
