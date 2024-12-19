import React from 'react';
import './Navbar.css';
import catLogo from './cat-logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={catLogo} className="navbar-logo" alt="Cat Rescue Logo" />
        <div className="navbar-title">
          <h1>Cat Rescue</h1>
          <h2>流浪猫救助</h2>
        </div>
      </div>
      <div className="navbar-links">
        <a href="#home">首页</a>
        <a href="#adopt">领养</a>
        <a href="#join">帮助我们</a>
        <a href="#faq">常见问答</a>
        <a href="#about">关于我们</a>
      </div>
      <div className="navbar-social">
        <a href="#youtube" className="social-link">YouTube</a>
        <a href="#facebook" className="social-link">Facebook</a>
      </div>
    </nav>
  );
};

export default Navbar;
