import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/about">О сайте</Link>
      <Link to="/posts">Посты</Link>
    </nav>
  );
};

export default Navbar;
