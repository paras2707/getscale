import React from "react";
import Modal from "../components/Modal";
import classes from "./IdeaForm.module.css";

const IdeaFrom = (props) => {
  return (
    <Modal setModalOpen={props.setModalOpen} className={classes.centeredForm}>
      <h2>Enter Your Business Idea</h2>
      <div>
        <form>
          <label>
            Company Name:
            <input type="text" />
          </label>
        </form>
      </div>
    </Modal>
  );
};

export default IdeaFrom;
