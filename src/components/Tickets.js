import React from "react";
import OneTicket from "./OneTicket";

const Tickets = ({ coupons }) => {
  const numbers = [...coupons];

  if (numbers.length) {
    let table = numbers.map((number, i) => (
      <OneTicket key={i} coupon={number} />
    ));

    const fadeAnimations = [
      "fade",
      "fade-up",
      "fade-down",
      "fade-left",
      "fade - right",
      "fade-up-right",
      "fade-up-left",
      "fade-down-right",
      "fade-down-left"
    ];
    const random = Math.floor(Math.random() * fadeAnimations.length);
    const animation = fadeAnimations[random];

    return (
      <div className="main_table" data-aos={animation}>
        {table}
      </div>
    );
  } else {
    return null;
  }
};

export default Tickets;
