import Button from "./components/Button";
import Dropdown from "./components/DropdownList";
import classes from "./Navbar.module.css";
import logo from "./static/logo_crop.png";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const NavBar = () => {
  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    setSearching(true);
  };

  return (
    <div>
      <div className={classes.navbar}>
        <Dropdown />
        <img
          src={logo}
          alt="Logo"
          style={{
            marginTop: "-16px",
            width: "240px",
            cursor: "pointer",
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 15%)",
          }}
        />
        <div style={{ height: "100%" }}>
          <span
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              marginRight: "20px",
              cursor: "pointer",
              height: "100%",
              lineHeight: "76px",
            }}
          >
            {searching && (
              <div>
                <input type="text" className={classes.searchBox} />
                <ImCross
                  className={classes.crossIcon}
                  onClick={() => setSearching(false)}
                />
              </div>
            )}
            {!searching && (
              <AiOutlineSearch
                size="50px"
                color="white"
                onClick={handleSearch}
                style={{ verticalAlign: "middle" }}
              />
            )}
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
