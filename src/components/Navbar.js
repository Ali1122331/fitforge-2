
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        FitForge
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/workouts" onClick={closeMenu}>Workouts</Link>
        <Link to="/my-plan" onClick={closeMenu}>My Plan</Link>
        <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
        <Link to="/market" onClick={closeMenu}>Market</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>

      <Link to="/auth" className="login-btn" onClick={closeMenu}>
        Login
      </Link>
    </nav>
  );
}
