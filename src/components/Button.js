import React from "react";

const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded-xl bg-blue-500 text-white ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
