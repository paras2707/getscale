import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div onClick={() => props.setModalOpen(false)} className={classes.backdrop}>
      <div
        className={`${classes.card} ${classes.centered} ${props.className}`}
        style={props.style}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
