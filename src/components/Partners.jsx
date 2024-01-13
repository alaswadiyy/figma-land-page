// eslint-disable-next-line no-unused-vars
import React from 'react';
import appleapp from '../assets/logos_apple-app-store.svg';
import apiary from '../assets/logos_apiary.svg';
import android from '../assets/logos_android-icon.svg';
import basecamp from '../assets/logos_basecamp.svg';
import airbnb from '../assets/logos_airbnb.svg';
import ibm from '../assets/logos_ibm.svg';

const Partners = () => {
  return (
    <section>
      <div className='partners_header'>
        <h2>Partners</h2>
      </div>
      <div className='partners_parag'>
        <p>We focus on ergonomics and meeting you where you work. It&#39;s only a keystroke away.</p>
      </div>
      <div className='logo_section'>
        <img src={appleapp} alt="" />
        <img src={apiary} alt="" />
        <img src={android} alt="" />
        <img src={basecamp} alt="" />
        <img src={airbnb} alt="" />
        <img src={ibm} alt="" className='ibm' />
      </div>
      <div className='div_btn'>
        <button className='btn'>All Partners</button>
      </div>
    </section>
  )
}

export default Partners