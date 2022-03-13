import React from "react";
import classes from "./Modal.module.css";
import { ImCross } from "react-icons/im";

const Modal = (props) => {
  return (
    <div className={classes.backdrop}>
      <div
        className={`${classes.card} ${classes.centered} ${props.className}`}
        style={props.style}
      >
        <div>
          <h2 style={{ textAlign: "center" }}>{props.title}</h2>
          <ImCross
            onClick={() => props.setModalOpen(false)}
            className={classes.cross}
          />
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
