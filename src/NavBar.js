import Button from "./components/Button";
import Dropdown from "./components/DropdownList";
import classes from "./Navbar.module.css";
import logo from "./static/logo_crop.png";
import { AiOutlineSearch } from "react-icons/ai";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className={classes.navbar}>
        <Dropdown />
        <img
          src={logo}
          alt="Logo"
          style={{ marginTop: "-16px", width: "240px", cursor: "pointer" }}
        />
        <div>
          <span
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              marginRight: "20px",
              cursor: "pointer",
            }}
          >
            <AiOutlineSearch
              size="50px"
              color="white"
              onClick={() => console.log("clicked")}
            />
          </span>
          <Button
            text="Sign In"
            style={{ marginRight: "31px", width: "110px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
