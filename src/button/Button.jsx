import React from "react";
import classes from "./Button.module.scss";
import cn from "classnames";

function Button({ className, onClick, label, children }) {
  return (
    <button className={cn(classes.button, className)} onClick={onClick}>
      {children && children}
      {label}
    </button>
  );
}

export default Button;
