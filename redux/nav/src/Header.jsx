import React from "react";
import { useStore } from "store/store";

function Header() {
  const { count, clear } = useStore();
  return (
    <header className="bg-blue-700 text-white font-bold text-3xl p-5 flex">
      <div className="flex-grow">Simple MFE communication(Remote App)</div>
      <div>{count}</div>
      <button
        onClick={clear}
        className=" px-4  bg-blue-800 text-white font-bold text-xl rounded"
      >
        Clear cart
      </button>
    </header>
  );
}

export default Header;
