import React from 'react'
import heroimg from "./assets/heroimg.svg"

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-center">
        <div className="hero-title">
          <h1>My Projects</h1>
          <p>Hello. My name is Ihor Sarzhan. I'm a front-end developer. I write my code using JS, React... I use different libraries and am always ready to learn new things. Ready for new acquaintances. </p>
        </div>
        <div className="img-container">
          <img src={heroimg} alt="Web" className='img'/>
        </div>
      </div>
    </section>
  )
}

export default Hero