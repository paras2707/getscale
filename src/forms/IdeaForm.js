import React from "react";
import Modal from "../components/Modal";
import classes from "./IdeaForm.module.css";

const IdeaFrom = (props) => {
  // const [dropChange, setDropChange] = useState("Technology"); 
  function handleSelectChange(e) {
    console.log(e)
  }
  return (
    <Modal setModalOpen={props.setModalOpen} className={classes.centeredForm}>
      <div className={classes.container}>
        <h2 style={{textAlign: "center"}}>Enter Your Business Idea</h2>
        <div style={{height: "100%"}}>
          <form className={classes.formFields}>
            <div>
              <label>Company Name:</label>
              <input className={classes.inputfield} type="text" placeholder="Enter Your Company name"  required/>
            </div>
            <div>
              <label>Category:</label>
              <select required style={{width: "90%", height: "2rem"}} onChange={handleSelectChange}>
                <option>Technology</option>
                <option>Education</option>
                <option>Fintech</option>
                <option>Social</option>
                <option>Medical</option>
                <option>Automobile</option>
                <option>Others</option>
              </select>
            </div>
            <div>
              <label>Title:</label>
              <input className={classes.inputfield} type="text" placeholder="Enter Your Business Title" required/>
            </div>
            <div>
              <label>Description:</label>
              <textarea  style={{height: "100px"}} className={classes.inputfield} type="text" placeholder="Describe Your Company..." />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default IdeaFrom;
