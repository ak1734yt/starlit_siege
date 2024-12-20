import React from 'react';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Starlit Siege Logo" />
      <nav>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#payment">Payment</a></li>
          <li><a href="#terms">Terms & Conditions</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
