import Button from "./components/Button";
import classes from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div>
      <div className={classes.navbar} />
      <Button />
    </div>
  );
};

export default NavBar;
