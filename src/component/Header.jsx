import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1> Welcome to Digistall</h1>
      <Link to="signup">- Sign up</Link>
    </header>
  );
};

export default Header;
