import React from "react";
import "./Home.css";
import myImage from "/src/components/images/me.jpg";
import Social from "./Social";

const Home = () => {
  return (
    <div className="home-container w-100 m-0 p-0 row">
      <div className="info col">
        <img
          className=" home-photo"
          src={myImage}
          alt="image"
          style={{ width: "20%" }}
        />
      </div>

      <div className="column">
        {/* <div className="job">
          <span
            className="jspan"
            style={{ color: "#6096B4", fontSize: "5rem", backgroundColor: "" }}
          >
            Web Developer
          </span>{" "}
          <br />
          based in the Philippines.
        </div> */}

        {/* <Social /> */}
      </div>
    </div>
  );
};

export default Home;
