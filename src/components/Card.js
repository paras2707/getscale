import React from "react";
import classes from "./Card.module.css";
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
function Card(props) {
  return (
    <div className={classes.card}>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <section className={classes.imgContainer}>
          <div className={classes.image}>
            <img
              src={props.image}
              alt="placeholder pics"
              className={classes.image}
            />
          </div>
          <div className={classes.company}>{props.company}</div>
        </section>
        <section className={classes.infoContainer}>
          <div className={classes.title}> {props.text} </div>
          <div style={{ display: "flex", height: "fit-content" }}>
            {props.tags.map((tag) => (
              <div key={tag} className={classes.tag}>
                {tag}
              </div>
            ))}
          </div>
          <div className={classes.side}>{props.description}</div>
          <div className={classes.iconContainer}>
            <div>
              <FiThumbsUp />
            </div>
            <div>
              <FiThumbsDown />
            </div>
            <div>
              <FaRegCommentAlt />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Card;
