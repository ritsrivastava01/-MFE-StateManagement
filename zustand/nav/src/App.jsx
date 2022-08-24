import React from "react";
import ReactDOM from "react-dom";
import { CountProvider } from "host/store";
import Header from "./Header";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header></Header>
    <div>Name: Nav(Remote App)</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
