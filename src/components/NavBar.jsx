import { Link } from "react-router-dom";
import './NavBar.css';


function NavBar() {
  return (
    <nav className="nav-container">
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <ul className="other-links">
          <li><Link to="/weather">Weather</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </ul>
    </nav>
  );
}

export default NavBar;
