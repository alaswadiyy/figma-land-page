/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import mac from '../assets/Macbook_Pro.png';
import board from '../assets/Boards_Notifications.png'

const Contents = () => {
  return (
    <section>
      <div className='contents_header'>
        <h2>Contents</h2>
      </div>
      <div className='contents_parag'>
        <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
      </div>
      <div className='cards'>
        <div className='card'>
          <h4>Work</h4>
          <p>Ever wondered if you're too reliant on a client for work? Slate helps you identify .</p>
          <button className='btn1 btn_blue'>Sign Up</button>
          <img src={mac} alt="" />
        </div>
        <div className='card'>
          <h4>Design with real data</h4>
          <p>Ever wondered if you're too reliant on a client for work? Slate helps you identify .</p>
          <button className='btn_blue btn2'>Try For Free</button>
          <img src={board} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Contents