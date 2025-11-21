import { Link } from "react-router-dom";
import './Footer.css';


function Footer() {
  return (
    <footer className="footer-container">
        <ul className="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/weather">Weather</Link></li>
            <li><Link to="/about">About</Link></li>
             <p>&copy;2025 Daily Weather App</p>
        </ul>
       
    </footer>
  );
}

export default Footer;