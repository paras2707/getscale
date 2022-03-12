import Card from "../components/Card";
import NavBar from "../NavBar";

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
        <Card text="Description 1" />
        <Card text="Description 1" />
        <Card text="Description 1" />
        <Card text="Description 1" />
      </div>
    </div>
  );
};

export default HomePage;
