import ReactDOM from "react-dom";

import {
  FunctionComponent,
  ClassComponent,
  ReturnChildrenComponent,
} from "./components/FunctionalAndClass";

import { Form, ControlledForm } from "./components/ControlledComponents";

import LoginController from "./components/LoginController";
import ProductList from "./components/ProductList";

import "./index.css";

// A React element, the element is on the right of the = sign, to the left is a constant (a memory pointer) to the element
const simplElement = (
  <div>
    <h2>Hello, world!</h2>
    <p>I'm an element!</p>
  </div>
);

// This ia more complicated element, it contains nested components
const complexElement = (
  <div>
    <div id="function-class-components" className="component-example">
      <FunctionComponent name="folks" />
      <hr />
      <br />
      <ClassComponent date={new Date()} />
      <hr />
      <br />
      <ReturnChildrenComponent>
        <h2>Returns all nodes within</h2>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </ReturnChildrenComponent>
    </div>
    <hr />
    <br />
    <div id="controlled-components">
      <Form />
      <hr />
      <ControlledForm />
    </div>
  </div>
);

const loginController = <LoginController />;

const productList = <ProductList />;

const app = (
  <app>
    {simplElement}
    <br />
    {complexElement}
    <br />
    {loginController}
    <br />
    {productList}
  </app>
);

// The Render method: used to render the element we just defined, and all the nested elements!
// The render function will pass all the properties down to the components, where those can be used to build and return elements.
// ReactDOM will merge the changes in the DOM.
ReactDOM.render(app, document.getElementById("root"));
