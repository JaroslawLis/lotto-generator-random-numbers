import React from "react";
import "./Header.css";

const Header = ({ budget }) => {
  return (
    <header>
      <h1> Generator Lotto </h1>{" "}
      <div>
        <p>
          Twój budżet wynosi: <strong> {budget} </strong>
          złotych{" "}
        </p>{" "}
      </div>{" "}
    </header>
  );
};

export default Header;
