import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards/Cards";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Cards />
  </React.StrictMode>,
  rootElement
);
