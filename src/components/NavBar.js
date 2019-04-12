import React from "react";
import "./NavBar.css";

const NavBar = ({ click }) => {
  return (
    <nav className="navigation">
      <button onClick={click}>Losowanie </button>
    </nav>
  );
};

export default NavBar;
