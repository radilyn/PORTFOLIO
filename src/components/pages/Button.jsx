import React from 'react'
import "./Button.css"

const Button = () => {
  return (
    <div className="buttons-container">
      <div className='buttons'>
      <button className="hire" type='button'>
        Hire me <i className="ri-arrow-right-line"></i>
      </button>
      <button className="portfolio">
        Portfolio <i className="ri-arrow-right-line"></i>
      </button>
      </div> 
    </div>
      
  )
}

export default Button;



