import ReactDOM from "react-dom";
import { useState } from "react";
import "./index.css";

function DeclarativeApproach() {
  const [scene, setScene] = useState("button");

  return scene === "question" || scene === "button" ? (
    <button
      style={scene === "question" ? { backgroundColor: "#FF6600" } : {}}
      onClick={() =>
        scene === "button" ? setScene("question") : setScene("showRocket")
      }
    >
      {scene === "question" ? "Are you sure?" : "Ready for launch"}
    </button>
  ) : (
    <span>🚀</span>
  );
}

ReactDOM.render(<DeclarativeApproach />, document.getElementById("root"));
