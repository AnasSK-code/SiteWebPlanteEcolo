import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../image/logo.png'

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-transparent py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-8 h-11" />
          <span className="text-[20px] font-bold tracking-wide uppercase relative"
  style={{
    backgroundImage: "linear-gradient(90deg, #0A6847, #32CD32, #000000FF)", // Dégradé inspiré du logo
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    textShadow: "4px 4px 10px rgba(0, 100, 0, 0.3)", // Effet de profondeur
    WebkitTextStroke: "0.25px white", // Bordure verte subtile
    letterSpacing: "2px",
  }}
>
  GROWTREE
</span>

        </Link>
        
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-green-400">MAIN</Link>
          <Link to="/info" className="text-white hover:text-green-400">INFO</Link>
          <Link to="/contact" className="text-white hover:text-green-400">CONTACT</Link>
          <Link 
            to="/plant-now" 
            className="bg-green-400 text-black px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
          >
            PLANT NOW
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;