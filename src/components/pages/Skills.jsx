import React from 'react'
import "./Skills.css"

const Skills = (props) => {
  return (
    <div className='skillbox'>
      <h1 className='skills'>What I Can Offer!</h1>
     
      <p className='offer'>
      I've worked with a range of technologies in the web development world. From Back-end to Design. On top of that, I'm an expert in terms of giving excellent customer service, technical support services, and, sales. I believe these skillset will give great impact.
        <br />
        <br />
      I work well with co-workers, am open to learning, sharing my ideas, and have a lot of potentials. I am committed at work and aims to elevate my skills in the industry.
      </p>
      
    

    <div className='skills_set col'>
    {props.items.map((item) => (
        <p className='set' key={item.id}>
        <h5>{item.name}</h5>
        </p>
       ))}
    </div>
    </div>

   
  )
}

export default Skills

