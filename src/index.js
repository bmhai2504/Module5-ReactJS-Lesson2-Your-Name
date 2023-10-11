import React from "react";
import ReactDOM from "react-dom/client";

const name = "Your Name";

const root = ReactDOM.createRoot(document.getElementById("root"));
const text = React.createElement("h1", {style: {textAlign : "center"}}, name);
root.render(text);
