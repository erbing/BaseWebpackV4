import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
const common = require("./module/index");
const common1 = require("./module/demo");
const common2 = require("./module/index1");

// console.log(common, "commons");
// console.log(common1, "commons1");
// console.log(common2, "commons2");

const APP = () => (
  <div className="app">
    <h3>Hello, World</h3>
  </div>
);

ReactDom.render(
  <BrowserRouter>
    <APP />
  </BrowserRouter>,
  document.getElementById("root")
);
