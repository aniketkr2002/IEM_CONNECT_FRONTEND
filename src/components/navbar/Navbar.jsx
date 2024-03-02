import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo" onClick={() => setClick(false)}>
          <span>IEM-CONNECT</span>
        </NavLink>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink
              exact
              to="/home"
              activeClassName="active"
              className="nav-links"
              onClick={() => setClick(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={() => setClick(false)}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/senior"
              activeClassName="active"
              className="nav-links"
              onClick={() => setClick(false)}
            >
              Guidance
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/blog"
              activeClassName="active"
              className="nav-links"
              onClick={() => setClick(false)}
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={() => setClick(false)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
