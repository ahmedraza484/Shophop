import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import logo from "../assets/logo.png";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce(
  (total, item) => total + item.qty,
  0
);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul className={`navbar-list ${menu ? "active" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="cart-icon">
              <Link to="/cart">
                <MdOutlineShoppingBag />
              </Link>
              <span>{cartCount}</span>
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
