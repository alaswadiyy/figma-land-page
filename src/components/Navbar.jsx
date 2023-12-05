// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import logo from '../assets/logo.svg'

const Navbar = () => {
    const [navState, setNavState] = useState(false);
  return (
    <nav>
        <div className="brand-container">
            <div className="brand">
            <img src={logo} alt="logo" />
            </div>
            <div className="toggle-container">
            
                <div className="toggle">
                    {navState ? (
                    <MdClose onClick={() => setNavState(false)} />
                    ) : (
                    <GiHamburgerMenu onClick={() => setNavState(true)} />
                    )}
                </div>
                <button className='btn'>Login</button>
            </div>
        </div>
        <div className={`links-container ${navState ? "nav-visible" : ""}`}>
            <ul className="links">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#product">Product</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        <div className='button'>
            <button className='btn'>Login</button>
        </div>
    </nav>
  )
}

export default Navbar