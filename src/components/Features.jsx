// eslint-disable-next-line no-unused-vars
import React from 'react'
import featuresImg from "../assets/features_img.png";
import icon1 from "../assets/feature_icon1.svg";
import icon2 from "../assets/feature_icon2.svg";
import icon3 from "../assets/feature_icon3.svg";

const Features = () => {
  return (
    <section>
      <div className='feature_header'>
        <h2>Features</h2>
      </div>
      <div className='feature_parag'>
        <p>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
      </div>
      <div className='feature_content'>
        <div className='container_img'>
          <img src={featuresImg} alt="" />
        </div>
        <div className='container_content'>
          <div className='content'>
            <div className='content_head'>
              <img src={icon1} alt="" />
              <h4>A single source of truth</h4>
            </div>
            <p>When you add work to your Slate calendar we automatically calculate useful insights.</p>
          </div>
          <div className='content'>
            <div className='content_head'>
              <img src={icon2} alt="" />
              <h4>Intuitive interface</h4>
            </div>
            <p>When you add work to your Slate calendar we automatically calculate useful insights.</p>
          </div>
          <div className='content'>
            <div className='content_head'>
              <img src={icon3} alt="" />
              <h4>Or with rules</h4>
            </div>
            <p>When you add work to your Slate calendar we automatically calculate useful insights.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features