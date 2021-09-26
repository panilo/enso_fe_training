import ReactDOM from "react-dom";
import "./index.css";
import Clock from "./components/Clock";
import Hello from "./components/Hello";

const hello = (
  <Hello name="class">
    <h2>Children</h2>
    <h3>World</h3>
    <h4>Moon</h4>
  </Hello>
);
const clock = <Clock />;

const app = (
  <app>
    {hello}
    <hr />
    {clock}
  </app>
);

ReactDOM.render(app, document.getElementById("root"));
