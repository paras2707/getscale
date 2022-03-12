import classes from "./Card.module.css";
function Card(props) {
  return (
    <div className={classes.card}>
      {/* {props.text} */}
      <div className={classes.image}></div>
      <div className={classes.side}></div>
      <div className={classes.tittle}></div>
    </div>
  );
}
export default Card;
