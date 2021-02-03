import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i
              className={click ? 'fas fa-times' : 'fas fa-bars'}
              style={{ color: '#26c6da' }}
            />
          </div>

          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <p style={{marginRight:'10px'}}>FlickJunkies</p>
            <i class="fas fa-brain" />
          </Link>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <i class="fas fa-home">{`  Home`}</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search-users" className="nav-links" onClick={closeMobileMenu}>
                <i class="fas fa-users">{`  Users`}</i>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/update-profile" className="nav-links" onClick={closeMobileMenu}>
                <i class="fas fa-user-circle">{`  Profile`}</i>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/forgot-password" className="nav-links" onClick={closeMobileMenu}>
                <i class="fas fa-unlock alt">{`  Reset Password`}</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
