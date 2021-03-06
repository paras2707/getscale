import classes from "./Button.module.css";
import React from "react";

const Button = (props) => {
  return (
    <button
      className={classes.btn}
      style={props.style}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default Button;
