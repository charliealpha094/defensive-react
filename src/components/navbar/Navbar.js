import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div name="top" className="navbar">
      <div className="container">
        <div className="logo">
          <HiOutlinePaperAirplane className="icon" />
          <h1>Defensive Inc.</h1>
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/f16">F16</Link>
          </li>
          <li>
            <Link to="/refurbishment">Refurbishment</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button>Sign in</button>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
