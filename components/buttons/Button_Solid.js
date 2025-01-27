import React from "react";

export default function Button_Solid({ children, onClick, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-6 py-2 bg-tealBlue text-white bg-second hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-first focus:ring-offset-2 rounded-lg w-full"
    >
      {children}
    </button>
  );
}
