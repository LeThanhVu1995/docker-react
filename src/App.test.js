import App from "./App";
import ReactDOM from "react-dom";

test("renders change link", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
