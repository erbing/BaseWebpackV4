import React from "react";
// var requirejs = require("requirejs");
const babel = require("@babel/core");
import babelArrawFunc from "@babel/plugin-transform-arrow-functions";

const optionsObject = {
  name: "zhang",
  getName() {
    console.log(this.name);
  }
};

const fn = () => {
  let a = 123;
  const getName = () => {
    console.log(this.name);
  };
};

// const resFn = babelArrawFunc(fn);
// const res = babel.transform(optionsObject);

console.log(babel, "-----babel------");
console.log(babelArrawFunc, "-----babelArrawFunc------");

const Requires = () => (
  <div>
    <div>1233s</div>
  </div>
);

export default Requires;
