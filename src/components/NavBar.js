import React from "react";
import "./NavBar.css";

const NavBar = ({ click, lotteryTicketPrice }) => {
  return (
    <nav className="navigation">
      <span> Mini lotto </span> <button onClick={click}> Losowanie </button>
      <span>
        Cena zakładu: {lotteryTicketPrice}
        zł
      </span>
    </nav>
  );
};

export default NavBar;
