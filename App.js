const header = React.createElement(
  "h1",
  { id: "heading", className: "header" },
  React.createElement(
    "div",
    { id: "sub-heading", className: "sub-header" },
    React.createElement(
      "div",
      { id: "sub-heading2", className: "sub-header2" },
      "Subheader2"
    )
  )
);

console.log(header);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);
