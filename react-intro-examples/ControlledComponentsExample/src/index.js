import ReactDOM from "react-dom";
import "./index.css";
import Form from "./components/ClassicForm";
import ControlledForm from "./components/ControlledComponents";

const app = (
  <app>
    <h1>Classic form</h1>
    <Form />
    <hr />
    <h1>Controlled component</h1>
    <ControlledForm />
  </app>
);

ReactDOM.render(app, document.getElementById("root"));
