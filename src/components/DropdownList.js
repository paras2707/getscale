import { useState } from "react";
import classes from "./DropdownList.module.css";

const Dropdown = () => {
  const [value, setValue] = useState("Companies");

  const handleDropdownChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <select
      className={classes.dropdown}
      value={value}
      onChange={(e) => handleDropdownChange(e)}
    >
      <option value="companies">Companies</option>
      <option value="investors">Investors</option>
    </select>
  );
};

export default Dropdown;
