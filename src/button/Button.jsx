import React from "react";
import classes from "./Button.scss";

function Button({ onClick, children, label }) {
  return (
    <button className={classes.button} onClick={onClick}>
      {children && children}
      {label}
    </button>
  );
}

export default Button;
