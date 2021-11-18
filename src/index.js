import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap";

ReactDOM.render(
  <BrowserRouter>
  {/* <ChakraProvider> */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
    {/* </ChakraProvider> */}
  </BrowserRouter>,
  document.getElementById("root")
);
