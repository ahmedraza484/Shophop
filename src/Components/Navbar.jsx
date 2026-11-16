import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">{/* <img>LOGO</img> */}</div>
          <ul className={`navbar-list ${menu ? "active" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">
                <MdOutlineShoppingCart />
              </Link>
            </li>
          </ul>
          <button className="menu-btn" onClick={() => setMenu(!menu)}>
            <MdOutlineMenuOpen />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
