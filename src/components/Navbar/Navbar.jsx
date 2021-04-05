import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/localApi';

import './Navbar.css';

const Navbar = () => {
  const loggedIn = isLoggedIn();

  return (
    <div className="navbar">
      <h1>Hacker News (Reloaded)</h1>
      <ul className="navbar__links">
        {loggedIn ? (
          <li><Link to="/logout">Logout</Link></li>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Register</Link></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
