import React from "react";
import ReactDOM from "react-dom";

const styleSheet = {
  color: "red",
  fontSize: "20px",
  border: "2px solid black"
};
var current = new Date(2022, 1, 1, 17);
var a = current.getHours();
console.log(a);

const customStyle = {
  color: ""
};

let b;

if (a > 0 && a < 12) {
  b = "Good Morning";
  customStyle.color = "red";
} else if (a > 12 && a < 18) {
  b = "Good Afternoon";
  customStyle.color = "blue";
} else {
  b = "good Evening";
  customStyle.color = "yellow";
}

ReactDOM.render(
  <h1 style={customStyle}>Hello World! {b} </h1>,
  document.getElementById("root")
);
