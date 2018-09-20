import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

import RequireDemo from "./require/index";

const common = require("./module/index");
const common1 = require("./module/demo");
const common2 = require("./module/index1");

const ex = require("./export/index");
import x from "./export/index";
import { fn, a } from "./export/index";
const ex1 = require("./export/index1");
import x1 from "./export/index1";
// console.log(common, "commons");
// console.log(common1, "commons1");
// console.log(common2, "commons2");
console.log(ex, "export"); // {fn: ƒ, __esModule: true} "export1"
console.log(x, "export-x"); // undefined "export-x"
console.log(fn, a, "export-fn"); // function() { return window.location.href; } , 123 "export-x"
console.log(ex1, "export1"); // {default: ƒ, __esModule: true}default: ƒ fn()__esModule: true__proto__: Object "export1"
console.log(x1, "export2"); // ƒ fn() {return window.location.href;} "export2"

const APP = () => (
  <div className="app">
    <h3>test for demo</h3>
    <RequireDemo />
  </div>
);

ReactDom.render(
  <BrowserRouter>
    <APP />
  </BrowserRouter>,
  document.getElementById("root")
);
