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

function NavBar() {
  return (
    <nav className="nav-wrapper p-0 m-0 py-4">
      <ul className="nav-list p-0 m-0">
        <li className="nav-item">
          <a href="#home">
            <FontAwesomeIcon icon={faHouse} size="md" />
            <span className="nav-home">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#about">
            <FontAwesomeIcon icon={faInfo} beat size="md" />
            <span className="nav-about">About</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects">
            <FontAwesomeIcon icon={faSuitcase} size="md" />
            <span className="nav-projects">Projects</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact">
            <FontAwesomeIcon icon={faPhone} shake size="md" />
            <span className="nav-contact">Contact</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#cv">
            <FontAwesomeIcon icon={faCloudArrowDown} bounce />
            <span className="nav-contact">My CV</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
