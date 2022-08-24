import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "nav/Header";
import "./index.scss";
import { CountProvider, useCount } from "host/store";

const App = () => {
  const [count, setCount] = useCount();
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header></Header>
      <div>name : Host</div>
      <div>Count: {count}</div>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-indigo-800 text-white font-bold py-2 rounded px-2"
        >
          Add to Card
        </button>
      </div>
    </div>
  );
};
ReactDOM.render(
  <CountProvider>
    <App />
  </CountProvider>,
  document.getElementById("app")
);
