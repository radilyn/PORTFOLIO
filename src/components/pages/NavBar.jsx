import React from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import "animate.css";

function NavBar() {
  return (
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
            <FontAwesomeIcon icon={faInfo} beat size="md" className="icons" />
            <span className="nav-about">ABOUT</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects">
            <FontAwesomeIcon icon={faSuitcase} size="md" className="icons" />
            <span className="nav-projects">PROJECTS</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact">
            <FontAwesomeIcon icon={faPhone} shake size="md" className="icons" />
            <span className="nav-contact">CONTACT</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#cv">
            <FontAwesomeIcon icon={faCloudArrowDown} bounce className="icons" />
            <span className="nav-contact">MY CV</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
