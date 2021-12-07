import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import { SocketProvider } from "./Services/SocketProvider";

ReactDOM.render(
  <HashRouter>
    <SocketProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </SocketProvider>
  </HashRouter>,
  document.getElementById("root")
);
