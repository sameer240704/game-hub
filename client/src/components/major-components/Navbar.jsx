import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { navbarData } from "../../data/navbarData";
import LanguageButton from "../minor-components/language-button";
import { FaGamepad } from "react-icons/fa";
import "../../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <div className="logo-icon">
        <FaGamepad className="controller" />
        <FaGamepad className="controller2" />
        <FaGamepad className="controller3" />
      </div>
      <div className="end-container">
        <div className="navbar-data">
          {navbarData.map((item) => (
            <h1 key={item.name}>
              <Link to={item.route} className="link-to">
                {item.name}
              </Link>
            </h1>
          ))}
        </div>
        <LanguageButton />
      </div>
    </div>
  );
};

export default Navbar;
