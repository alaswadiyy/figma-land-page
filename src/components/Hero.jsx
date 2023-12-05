// eslint-disable-next-line no-unused-vars
import React from 'react'
import screens from '../assets/screens.png';

const Hero = () => {
  return (
    <section>
      <div className='hero-header'>
        <h1>Work at the speed of thought</h1>
      </div>
      <div className='hero-parag'>
        <p>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
      </div>
      <div className='buttons'>
        <button className='btn_blue'>Try for Free</button>
        <button className='btn'>Learn More</button>
      </div>
      <div className='screens'>
        <img src={screens} alt="" />
      </div>
    </section>
  )
}

export default Hero