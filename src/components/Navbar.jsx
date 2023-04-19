import { useState, useEffect } from "react";
//import logo from "./logo.png";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

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
      </div>

      <div className="navbar-end">
        <a className="navbar-item" href="/about">
          About
        </a>
        <a className="navbar-item" href="/posts">
          Posts
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
