import React from 'react'
import heroimg from "./assets/heroimg.svg"

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-center">
        <div className="hero-title">
          <h1>My Projects</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo maxime repellat praesentium perferendis amet, enim dolorem facilis veniam culpa cupiditate aliquid corporis, sit aspernatur doloribus.</p>
        </div>
        <div className="img-container">
          <img src={heroimg} alt="Web" className='img'/>
        </div>
      </div>
    </section>
  )
}

export default Hero