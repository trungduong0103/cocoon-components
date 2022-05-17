import React from "react";
import cn from "classnames";
import classes from "./Paper.module.scss";

function Paper({ className, children }) {
  return <div className={cn(classes.paper, className)}>{children}</div>;
}

export default Paper;
