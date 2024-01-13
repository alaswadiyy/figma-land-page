/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'

const Gallery = () => {
  return (
    <section>
      <div className='gallery_header'>
        <h2>Gallery</h2>
      </div>
      <div className='gallery_parag'>
        <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
      </div>
      <div className='wrapper'>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className='wrap'>
        <img src={image5} alt="" className='sides' />
        <img src={image6} alt="" />
        <img src={image7} alt="" className='sides' />
      </div>

      <div className='div_btn'>
        <button className='btn'>
          See more
        </button>
      </div>
    </section>
  )
}

export default Gallery