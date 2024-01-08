import React from "react";
import ReactDOM from "react-dom/client";

//   we are creating heading using core react .

// react.createElement => three parameter (what tag ur going to create , {here we can mention the id and class}, wt should come inside the first tag which you created in 1st parameter)
const heading = React.createElement(
  "div",
  { id: "root" },
  React.createElement("h1", {}, "Namaste React from React🚀 ")
);

//   we have created the heading to display the heading we need create the root using reactDOM

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(heading);
