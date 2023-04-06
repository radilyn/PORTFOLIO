import "./App.css";
import NavBar from "./components/pages/NavBar";
import Home from "./components/pages/Home";
import Button from "./components/pages/Button";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import proj1 from "./components/images/pp.jpg";
import calcu from "./components/images/calculator.jpg";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const projects = [
  {
    id: 1,
    image: proj1,
    name: "Clothing Website",
    description:
      "This project is my fashion online store. These days most ladies, even men loves wearing trendy clothes for special occasions and even just to take a selfie. We all want to look good. I want to make a simple yet gives that fashion vibe website where customers will keep coming back.",
  },
  {
    id: 2,
    image: calcu,
    name: "Calculator Website",
    description:
      "This project aims to give easy access to basic math calculator for everyone who needs it. It is simple to use and on point. The design is minimalist and have an aesthetic feels. This will more likely be used by ladies like me. I am planning to design a scientific calculator soon.",
  },
];

function App() {
  return (
    <div className="App">
      <div className="logo">DEVELOPER</div>
      <NavBar />
      <h1>Welcome to my Portfolio</h1>
      <div>
        <Home />
      </div>
      {/* <h1 className="name">Ramirez, Radilyn B.</h1> */}
      <div>{/* <About /> */}</div>
      <div>{/* <Projects items={projects} /> */}</div>
      {/* <Button /> */}
    </div>
  );
}

export default App;
