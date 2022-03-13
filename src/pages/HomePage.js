import React, { useState } from "react";
import Card from "../components/Card";
import NavBar from "../NavBar";
import { IoFilter } from "react-icons/io5";
import { RiArrowUpDownFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import Button from "../components/Button";
// import Modal from "../components/Modal";
import IdeaFrom from "../forms/IdeaForm";

const data = [
  {
    id: 1,
    cmp_name: "GrowMore",
    image: "https://picsum.photos/id/1010/111",
    title: "An App to grow your knowledge",
    tags: ["Tech", "Edu"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    id: 2,
    cmp_name: "Hype",
    image: "https://picsum.photos/id/1/111",
    title: "An App to connect with others",
    tags: ["Social", "Tech"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    cmp_name: "Electrix",
    image: "https://picsum.photos/id/133/111",
    title: "Electric vehicles",
    tags: ["Automobile"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    cmp_name: "SneaKare",
    image: "https://picsum.photos/id/103/111",
    title: "Selling Sneakers related products",
    tags: ["Product"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState(data);

  const handleSubmit = (data) => {
    console.log(data);
    setUserData((prevData) => [...prevData, data]);
  };

  return (
    <div>
      {modalOpen && (
        <IdeaFrom setModalOpen={setModalOpen} submit={handleSubmit} />
      )}
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "-700px",
            marginBottom: "5px",
          }}
        >
          <IconContext.Provider value={{ size: "30px", color: "#727272" }}>
            <div>
              {" "}
              <IoFilter />
            </div>
            <div style={{ marginLeft: "28px" }}>
              <RiArrowUpDownFill />
            </div>
          </IconContext.Provider>
          <div
            style={{
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
              color: "#727272",
            }}
          >
            {" "}
            Scale Up Your Passion
          </div>
        </div>
        <div>
          {" "}
          <Button
            style={{
              position: "absolute",
              width: "35px",
              height: "35px",
              marginLeft: "352px",
              marginTop: "-42px",
              background: "#5EA0FF",
              borderRadius: "50%",
            }}
            text="+"
            onClick={() => setModalOpen(true)}
          />{" "}
        </div>
        {userData.map((entry) => (
          <Card
            key={entry.id}
            text={entry.title}
            company={entry.cmp_name}
            tags={entry.tags}
            image={entry.image}
            description={entry.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
