import React from "react";
import ReactDOM from "react-dom";

const header = React.createElement(
  "h12",
  { id: "heading", className: "header" },
  React.createElement(
    "div",
    { id: "sub-heading", className: "sub-header" },
    React.createElement(
      "div",
      { id: "sub-heading2", className: "sub-header2" },
      "Subheader22"
    )
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);
