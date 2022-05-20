import React from "react";
import PropTypes from "prop-types";
import classes from "./Paper.module.scss";

function Paper({ children }) {
  return <div className={classes.paper}>{children}</div>;
}

Paper.propTypes = {
  children: PropTypes.node,
};

Paper.defaultProps = {
  children: () => {},
};

export default Paper;
