import React from "react";
import classes from "./Button.module.scss";
import cn from "classnames";

function Button({ onClick, children, label }) {
  return (
    <button className={cn(classes.button)} onClick={onClick}>
      {children && children}
      {label}
    </button>
  );
}

export default Button;
