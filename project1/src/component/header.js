import React from "react";
import { Link } from "react-router-dom";  
import './header.css'; 

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <img src="/images/myntra logo.jpg" alt="Myntra Logo" className="logo"/>
        <h1>Myntra</h1>

        {/* <div className="nav-links">
          <Link to="/productscard" className="nav-heading">View All Products</Link>
        </div> */}

        <div className="nav-buttons">
          <Link to="/signin">
            <button className="signin-btn">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
