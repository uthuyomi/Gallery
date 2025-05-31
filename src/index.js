import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";
import { ThemeProvider } from "./ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <Main />
  </ThemeProvider>
);
