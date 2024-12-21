import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import catLogo from './cat-logo.svg';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={catLogo} className="navbar-logo" alt="Safe Paws Logo" />
          <div className="navbar-title">
            <h1>Safe Paws</h1>
            <h2>流浪猫救助</h2>
          </div>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>首页</Link>
        <Link to="/adopt" className={location.pathname === '/adopt' ? 'active' : ''}>领养</Link>
        <Link to="/join" className={location.pathname === '/join' ? 'active' : ''}>加入我们</Link>
        <Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>常见问答</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>关于我们</Link>
      </div>
      <div className="navbar-social">
        <a href="#youtube" className="social-link">YouTube</a>
        <a href="#facebook" className="social-link">Facebook</a>
      </div>
    </nav>
  );
};

export default Navbar;
