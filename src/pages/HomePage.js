import Card from "../components/Card";
import NavBar from "../NavBar";
import { IoFilter } from "react-icons/io5";
import { RiArrowUpDownFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import Button from "../components/Button";
// import { AiOutlinePlusCircle } from "react-icons/ai";
const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          marginTop: "80px",
          
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", marginLeft: "-700px", marginBottom: "5px"}}>
          <IconContext.Provider value={{ size: "30px", color: "#727272" }}>

            <div> <IoFilter /></div>
            <div style={{ marginLeft: "28px" }}><RiArrowUpDownFill /></div>

          </IconContext.Provider>
          <div style={{ 
            position: "absolute",
            width: "223px",
            height: "29px",
            marginLeft: "277px",
            marginTop: "3px",
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "21px",
            lineHeight: "29px",
            textAlign: "center",
            color: "#727272" }}
          > Scale Up Your Passion</div>
        </div>
            <div > <Button style={{ 
              position: "absolute",
              width: "35px",
              height: "35px",
              marginLeft: "352px",
              marginTop: "-35px",
              background: "#5EA0FF",
              borderRadius: "50%"
            }}>+</Button> </div>
        <Card text="Description " company="Company" />
        <Card text="Description " company="Company"/>
        <Card text="Description " company="Company"/>
        <Card text="Description " company="Company"/>
      </div>
    </div>
  );
};

export default HomePage;
