import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "../css/Nav.css";
import Layout from "./Layout";
import Search from "./Search";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <Link to="/home">
        <h2 className="glowNav">Glow Station</h2>
      </Link>
      <Search /> 
      <Nav defaultActiveKey="/home" className="LI">
        {/* <Link className="links" to="/home">
          Home
        </Link> */}
        {/* <Link className="links" to="/loading2">
          Routine Builder
        </Link> */}
        {/* <Link className="links" to="/shop">
          Shop
        </Link> */}
        {/* <Link className="links" to="/skineducation">
          Skin Education
        </Link> */}
        {/* <Link className="links" to="/about">
          About Glow Station
        </Link> */}
        <Link className="links RB" to="/loading2">
          Routine Builder
        </Link>
        <Link className="links" to="/cart">
          Cart ({props.cart.length})
        </Link>
        <Link to="/product"></Link>
        <Layout wishlist={props.wishlist} />
      </Nav>
    </div>
  );
};

export default Navbar;
