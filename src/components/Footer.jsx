import React from "react";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { FaHeadphones } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import "../styles/Footer.css";

const Footer = () => {
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10 max-md:px-0">
      <nav className="grid grid-flow-col max-sm:grid-flow-row gap-4">
        <Link to="/" className="link link-hover text-2xl max-md:text-xl text-accent-content" onClick={() => window.scrollTo(0, 0)}>
          Home
        </Link>
        <Link to="/shop" className="link link-hover text-2xl max-md:text-xl text-accent-content" onClick={() => window.scrollTo(0, 0)}>
          Shop
        </Link>
        <Link to="/about" className="link link-hover text-2xl max-md:text-xl text-accent-content" onClick={() => window.scrollTo(0, 0)}>
          About us
        </Link>
        <Link to="/contact" className="link link-hover text-2xl max-md:text-xl text-accent-content" onClick={() => window.scrollTo(0, 0)}>
          Contact
        </Link>
        {!loginState && (
          <>
            <Link
              to="/login"
              className="link link-hover text-2xl max-md:text-xl text-accent-content"
              onClick={() => window.scrollTo(0, 0)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="link link-hover text-2xl max-md:text-xl text-accent-content"
              onClick={() => window.scrollTo(0, 0)}
            >
              Register
            </Link>
          </>
        )}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <FaSquareXTwitter className="text-4xl max-sm:text-4xl text-accent-content" />
          <FaSquareFacebook className="text-4xl max-sm:text-4xl text-accent-content" />
          <FaSquareInstagram className="text-4xl max-sm:text-4xl text-accent-content" />
          <FaSquareYoutube className="text-4xl max-sm:text-4xl text-accent-content" />
        </div>
      </nav>
      <aside>
          <div className="topbar border-b border-gray-800">
        <ul>
          <li>
            <FaHeadphones className="text-2xl max-sm:text-lg text-accent-content" />
            <span className="text-2xl max-sm:text-lg text-accent-content">
              +91-9742894424
            </span>
          </li>
          <li>
            <FaRegEnvelope className="text-2xl max-sm:text-lg text-accent-content" />{" "}
            <span className="text-2xl max-sm:text-lg text-accent-content">
              support@veggiedelight.com
            </span>
          </li>
        </ul>
      </div>
        <p className="text-2xl max-sm:text-sm text-accent-content">
          Copyright © 2024 - All right reserved by Veggie Delight
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
