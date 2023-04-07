import React from "react";
import "./Home.css";
import "./NavBar.css";
import myImage from "/src/components/images/me.jpg";
import Social from "./Social";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import "animate.css";

const Home = () => {
  return (
    <div className="home-container w-100">
      <div className="home-container1 col xs={12} md={6} xl={7}">
        <nav className="nav-wrapper p-0 m-0 py-0 animate__animated animate__pulse nav-container animate__infinite	infinite ">
          <ul className="nav-list p-0 m-0">
            <li className="nav-item">
              <a href="#home">
                <FontAwesomeIcon icon={faHouse} size="md" className="icons" />
                <span className="nav-home">HOME</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#about">
                <FontAwesomeIcon
                  icon={faInfo}
                  beat
                  size="md"
                  className="icons"
                />
                <span className="nav-about">ABOUT</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects">
                <FontAwesomeIcon
                  icon={faSuitcase}
                  size="md"
                  className="icons"
                />
                <span className="nav-projects">PROJECTS</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact">
                <FontAwesomeIcon
                  icon={faPhone}
                  shake
                  size="md"
                  className="icons"
                />
                <span className="nav-contact">CONTACT</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#cv">
                <FontAwesomeIcon
                  icon={faCloudArrowDown}
                  bounce
                  className="icons"
                />
                <span className="nav-contact">MY CV</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="home-container2 ">
          <div className="info pt-5 col-9 xs={12} md={6} xl={7}">
            <h4 className="mt-5 ">Welcome to my Portfolio</h4>
            <h1 className="animate__animated animate__typing animate__infinite	infinite">
              Hi! I'm Radilyn Ramirez <br /> WEB DESIGNER.
            </h1>
            <p>
              This will position the ".design" element at the center of the
              header and set the background image of the word "DESIGN". You can
              adjust the CSS properties as needed to achieve the desired look.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="col-4">
        <img
          className="home-photo"
          src={myImage}
          alt="image"
          style={{ width: "50%" }}
        />
      </div> */}
    </div>
  );
};

export default Home;
