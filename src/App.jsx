// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contents from './components/Contents';
import Gallery from './components/Gallery';
import Partners from './components/Partners';
import Testimonial from './components/Testimonial';
import Opentype from './components/Opentype';
import Footer from './components/Footer';
import "./sass/index.scss";


function App() {

  return (
    <div className='app-container'>
      <Navbar />
      <Hero />
      <Features />
      <Contents />
      <Gallery />
      <Partners />
      <Testimonial />
      <Opentype />
      <Footer />
    </div>
  )
}

export default App
