import classes from "./Card.module.css";
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
function Card(props) {
  return (
    <div className={classes.card}>
      <div className={classes.title}> {props.text} </div>
      <div className={classes.image}></div>
      <div className={classes.side}></div>
      <div className={classes.tittle}></div>
      <div className={classes.company}>{props.company}</div>
      <div className={classes.up}><FiThumbsUp /></div>
      <div className={classes.bottom}><FiThumbsDown /></div>
      <div className={classes.comment}><FaRegCommentAlt /></div>
    </div>
  );
}
export default Card;
