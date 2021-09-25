import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import DynamicRouterExample from "./components/DynamicRouterExample";
import NestedRoutesExample from "./components/NestedRoutesExample";

function Examples() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/dynamic">
            <DynamicRouterExample />
          </Route>
          <Route path="/category">
            <NestedRoutesExample />
          </Route>
          <Route path="/" component={Links}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function Links() {
  return (
    <ul>
      <li key="1">
        <Link to="/category">Nested</Link>
      </li>
      <li key="2">
        <Link to="/dynamic">Dynamic</Link>
      </li>
    </ul>
  );
}

ReactDOM.render(<Examples />, document.getElementById("root"));
