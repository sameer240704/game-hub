import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { navbarData } from "../../data/navbarData";
import "../../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src={Logo} alt="logo" className="logo-image" />
      <div className="navbar-data">
        {navbarData.map((item) => (
          <h1 key={item.name}>
            <Link to={item.route} className="link-to">
              {item.name}
            </Link>
          </h1>
        ))}
      </div>

      <button className="join-button">Join Now</button>
    </div>
  );
};

export default Navbar;
