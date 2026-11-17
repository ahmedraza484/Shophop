import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-items footer-logo">
          <img src={logo} alt="" />
          <div className="social-links">
            <Link to="https://www.linkedin.com/in/ahmedrazajpg/" target="_blank">
              <FaLinkedin />
            </Link>
            <Link to="https://github.com/ahmedraza484" target="_blank">
              <FaGithub />
            </Link>
          </div>
        </div>
        <div className="footer-items">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link>HOME</Link>
            </li>
            <li>
              <Link>SHOP</Link>
            </li>
            <li>
              <Link>ABOUT</Link>
            </li>
            <li>
              <Link>CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="footer-items footer-contact">
          <h3>GET IN TOUCH</h3>
          <div className="item">
            <span>Location</span>
            <p>Quaidabad Landhi Karachi.</p>
          </div>
          <div className="item">
            <span>Contact: </span>
            <p><Link to="tel:+923248817986"> 03248817986</Link></p>
          </div>
          <div className="item">
            <span>E-mail: </span>
            <p><Link to="mailto:ahmedraza.jpg@gmail.com">ahmedraza.jpg@gmail.com</Link></p>
          </div>
        </div>

        <div className="footer-items footer-newsletter">
          <h3>News Letter</h3>
          <p>Subscribe Our NewsLetter</p>
          <form className="form">
            <input type="text" placeholder="E-mail" required />
            <button type="submit" className="news-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
