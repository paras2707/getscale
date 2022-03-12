import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={classes.btn} style={props.style}>
      {props.text}
    </button>
  );
};

export default Button;
