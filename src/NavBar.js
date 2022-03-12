import Button from "./components/Button";
import classes from "./Navbar.module.css";
import logo from "./static/logo_crop.png";

const NavBar = () => {
  return (
    <div>
      <div className={classes.navbar}>
        <Button text="Companies" style={{ marginLeft: "31px" }} />
        <img
          src={logo}
          alt="Logo"
          style={{ marginTop: "-16px", width: "240px" }}
        />
        <Button text="Sign In" style={{ marginRight: "31px" }} />
      </div>
    </div>
  );
};

export default NavBar;