import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          VELOCE<span>HUB</span>
        </Link>
        <nav className="navbar-links">
          <Link to="/" className="nav-link">Explore</Link>
          <Link to="/register" className="nav-link nav-link-cta">Join as Creator</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
}