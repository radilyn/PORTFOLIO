import React from 'react';
import './Projects.css';


const Projects = (props) => {
  return (
    <div className='sample' id='projects'>
      <h1 className='work'>Here are my Works!</h1>

      <div className='cards column'>
        {props.items.map((item) => (
          <div key={item.id}>
            {item.id === 1 && <div className='project1 col-6'>
              <img src={item.image} alt={item.name} />
              <h1>{item.name}</h1>
              <p className='description'>{item.description}</p>
            </div>}
            
            {item.id === 2 && <div className='project2 col-6'>
              <img src={item.image} alt={item.name} />
              <h1>{item.name}</h1>
              <p className='description'>{item.description}</p>
            </div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

