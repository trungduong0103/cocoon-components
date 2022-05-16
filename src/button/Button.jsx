import React from "react";

function Button({ onClick, children }) {
  return (
    <button style={{ color: "red" }} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
