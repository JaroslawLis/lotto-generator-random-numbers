import React from "react";
import "./Header.css";

const Header = ({ budget, lotteryTicket }) => {
  return (
    <header>
      <h4> Generator Lotto </h4>
      <div>
        <p>
          Twój budżet wynosi:<strong> {budget} </strong>
          złotych
        </p>
      </div>
    </header>
  );
};

export default Header;
