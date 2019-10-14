import React from "react";  
import ReactDOM from "react-dom";  
import Noty from 'noty';

import "../node_modules/noty/lib/noty.css";  
import "../node_modules/noty/lib/themes/mint.css";  
import "./styles.css";
import "./notifications_sass.scss";

function App() {  
  return (
    <div className="App">
      <h1>This is my coding project for Remo</h1>
      <h2>I hope you guys like it</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");  
ReactDOM.render(<App />, rootElement);

["Joined", "Left"].forEach(
    (type, i) =>
      setTimeout(function() {
        new Noty({
          text: "Another User Has " + type + " Your Table",
          theme: "bootstrap-v4",
          type: type
        }).show();
      }, 500 * i)
  );

["Started", "Ended"].forEach(
    (type, i) =>
      setTimeout(function() {
        new Noty({
          text: "A Broadcast Has " + type ,
          theme: "bootstrap-v4",
          type: type
        }).show();
      }, 500 * i)
  );

["You Have a", "Another User Has a"].forEach(
    (type, i) =>
      setTimeout(function() {
        new Noty({
          text: type + "Connection Issue",
          theme: "bootstrap-v4",
          type: type
        }).show();
      }, 500 * i)
  );

["You Have a", "Another User Has a"].forEach(
    (type, i) =>
      setTimeout(function() {
        new Noty({
          text: type + "WebCam Issue",
          theme: "bootstrap-v4",
          type: type
        }).show();
      }, 500 * i)
  );