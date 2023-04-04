import React from 'react';
import Draggable from 'react-draggable';
import './About.css';
import Skills from './Skills';

const skills = [
  {
    id:1,
    name:'HTML'
  },
  {
    id:2,
    name:'CSS'
  },
  {
    id:3,
    name:'BOOT STRAP'
  },
  {
    id:4,
    name:'REACT'
  },
  {
    id:5,
    name:'JS'
  },
]

const About = () => {
  return (
    <Draggable handle=".handle">
      <div className="back column" id="about">
        <div className="box col">
          <h2 className="handle">About Me</h2>
          <p>
            I've been studying Full-Stack Web Development with Kodego. I love
            designing, from frontend to backend interface and I'm excited to
            help new entrepreneurs as well as businesses in developing their
            websites and profiles.
          </p>
        </div>
        <Skills items={skills}/>
      </div>
    </Draggable>
  );
};

export default About;
