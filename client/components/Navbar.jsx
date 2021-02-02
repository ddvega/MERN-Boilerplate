import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { useAuth } from '../contexts/AuthContext';
import './Navbar.css';

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { currentUser } = useAuth();

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
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <p style={{paddingRight:'10px'}}> App</p> <i className="fab fa-galactic-republic" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/search-users" className="nav-links" onClick={closeMobileMenu}>
                Users
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/update-profile" className="nav-links" onClick={closeMobileMenu}>
                Profile
              </Link>
            </li>

            {/* <Button href={currentUser ? '/logout' : '/login'} color="inherit">
            {currentUser ? 'logout' : 'login'}
          </Button> */}

            <li className="nav-item">
              <Link
                to={currentUser ? '/logout' : '/login'}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {currentUser ? 'Logout' : 'Login'}
              </Link>
            </li>

            
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">Sign Up</Button>} */}
        </div>
      </nav>
    </>
  );
};
