import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="page">
        <nav className="page__menu page__custom-settings menu">
          <ul className="menu__list r-list">
            <li className="menu__group">
              <Link
                to="/"
                href="#0"
                className="menu__link r-link text-underlined"
              >
                Home
              </Link>
            </li>
            <li className="menu__group">
              <Link
                to="/cocktails"
                href="#0"
                className="menu__link r-link text-underlined"
              >
                Coctaikls
              </Link>
            </li>
            <li className="menu__group">
              <Link
                to="/admin"
                href="#0"
                className="menu__link r-link text-underlined"
              >
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
