import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <p>LOGO</p>
          </div>
          <ul>
            <li>
              <Link>HOME</Link>
            </li>
            <li>
              <Link>SHOP</Link>
            </li>
            <li>
              <Link>ABOUT US</Link>
            </li>
            <li>
              <Link>CONTACT US</Link>
            </li>
            <p>MENU ICONS</p>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
