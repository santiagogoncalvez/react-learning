import React from "https://esm.sh/react@19.1";
import ReactDOM from "https://esm.sh/react-dom@19.1/client";

const appDomElement = document.getElementById("app");

const root = ReactDOM.createRoot(appDomElement);
const button = React.createElement("button", {"data-id": 1}, "Button 1");
const button2 = React.createElement("button", {"data-id": 2}, "Button 2");
const button3 = React.createElement("button", {"data-id": 3}, "Button 3");

const div = React.createElement(React.Fragment, null, [button, button2, button3]);

root.render(div);