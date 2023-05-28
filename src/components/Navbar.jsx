import { useState, useEffect } from "react";
//import logo from "./logo.png";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setIsSticky(window.pageYOffset > 0);
  };

  return (
    <nav
      className={`navbar ${isSticky ? "is-fixed-top sticky-nav" : ""}`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="/logo.png" alt="Logo" />
          <span>City Hikers</span>
        </a>

        <a
          role="button"
          className={`navbar-burger burger ${isMenuOpen ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}>
        <div className="navbar-end">
          <a className="navbar-item" href="/about">
            About
          </a>
          <a className="navbar-item pr-4" href="/posts">
            Posts
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
