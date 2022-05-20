import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.module.scss";
import cn from "classnames";

function Button({ onClick, children }) {
  return (
    <button className={cn(classes.button)} onClick={onClick}>
      {children && children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  onClick: () => {},
  children: () => {},
};

export default Button;
