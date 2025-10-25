import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CricketNavbar.css';

const CricketNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="cricket-navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-container">
            <div className="bcci-emblem">
              <div className="emblem-outer">
                <div className="emblem-inner">
                  <div className="star">⭐</div>
                </div>
              </div>
            </div>
            <span>BCCI</span>
          </div>
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/odi" className="nav-link" onClick={() => setIsMenuOpen(false)}>ODI</Link>
          <Link to="/t20i" className="nav-link" onClick={() => setIsMenuOpen(false)}>T20I</Link>
          <Link to="/test" className="nav-link" onClick={() => setIsMenuOpen(false)}>Test</Link>
          <Link to="/squads" className="nav-link" onClick={() => setIsMenuOpen(false)}>Squads</Link>
          <Link to="/stats" className="nav-link" onClick={() => setIsMenuOpen(false)}>Stats</Link>
        </div>
        
        <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default CricketNavbar;