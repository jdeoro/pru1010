import React from "react";

const Alert = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-2 text-center w-96 max-w-xs m-auto">
      <span className="sm:inline-block">{message}</span>
    </div>
  );
};

export default Alert;
