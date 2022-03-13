import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import classes from "./IdeaForm.module.css";

const IdeaFrom = (props) => {
  const [value, setValue] = useState("Technology");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [disable, setDisable] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (title !== "" && name !== "") {
      setDisable(false);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (title !== "" && name !== "") {
      setDisable(false);
    }
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    const min = 1;
    const max = 1000;
    const rand = parseInt(min + Math.random() * (max - min));
    console.log(rand);
    const idea = {
      id: title,
      image: `https://picsum.photos/id/${rand}/111`,
      title,
      cmp_name: name,
      description: desc,
      tags: [value],
    };
    props.submit(idea);
  };

  return (
    <Modal
      setModalOpen={props.setModalOpen}
      className={classes.centeredForm}
      title="Enter Your Business Idea"
    >
      <div className={classes.container}>
        {/* <h2 style={{ textAlign: "center" }}>Enter Your Business Idea</h2> */}
        <div style={{ height: "100%" }}>
          <form className={classes.formFields}>
            <div>
              <label>Company Name:</label>
              <input
                className={classes.inputfield}
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter Your Company name"
                required
              />
            </div>
            <div>
              <label>Category:</label>
              <select
                style={{ width: "90%", height: "2rem", border: "none" }}
                onChange={(e) => handleDropdownChange(e)}
                value={value}
              >
                <option value="Technology">Technology</option>
                <option value="Education">Education</option>
                <option value="Fintech">Fintech</option>
                <option value="Social">Social</option>
                <option value="Medical">Medical</option>
                <option value="Automobile">Automobile</option>
                <option value="Food">Food</option>
              </select>
            </div>
            <div>
              <label>Title:</label>
              <input
                className={classes.inputfield}
                type="text"
                placeholder="Enter Your Business Title"
                value={title}
                onChange={handleTitleChange}
                required
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                style={{ height: "100px" }}
                className={classes.inputfield}
                type="text"
                placeholder="Describe Your Company..."
                value={desc}
                onChange={handleDescChange}
              />
            </div>
          </form>
          <Button
            text="Submit"
            style={{
              width: "90%",
              marginLeft: "25px",
              cursor: "pointer",
              backgroundColor: disable ? "#727272" : "#5ea0ff",
            }}
            onClick={() => {
              props.setModalOpen(false);
              handleSubmit();
            }}
            disabled={disable}
          />
        </div>
      </div>
    </Modal>
  );
};

export default IdeaFrom;
