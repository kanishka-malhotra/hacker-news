import { NavLink, useLocation } from 'react-router-dom';
import { isLoggedIn } from '../../services/localApi';

import './Navbar.css';

const Navbar = () => {
  useLocation();      // To update Navbar whenever the location updates
  let loggedIn = isLoggedIn();

  return (
    <div className="navbar">
      <a href="/" aria-label="Link to the home page" className="navbar__header">
        <h1>Hacker News (Reloaded)</h1>
      </a>
      <ul className="navbar__links">
        {loggedIn ? (
          <>
            <li><NavLink to="/new-story">New story</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
          </>
        ) : (
          <>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Register</NavLink></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
