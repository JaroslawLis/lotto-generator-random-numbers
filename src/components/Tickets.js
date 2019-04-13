import React from "react";
import OneTicket from "./OneTicket";

const Tickets = ({ coupons }) => {
  const numbers = [...coupons];
  const fadeAnimations = [
    "fade",
    "fade-up",
    "fade-down",
    "fade-left",
    "fade - right",
    "fade-up-right",
    "fade-up-left",
    "fade-down-right",
    "fade-down-left",
    "flip-up",
    "flip-down",
    "flip-left",
    "flip-right",
    "slide-up",
    "slide-down",
    "slide-left",
    "slide-right",
    "zoom-in",
    "zoom-in-up",
    "zoom-in-down",
    "zoom-in-left",
    "zoom-in-right",
    "zoom-out",
    "zoom-out-up",
    "zoom-out-down",
    "zoom-out-left",
    "zoom-out-right"
  ];
  const random = Math.floor(Math.random() * fadeAnimations.length);
  let animation = fadeAnimations[random];

  if (numbers.length) {
    let table = numbers.map((number, i) => (
      <OneTicket
        key={i}
        coupon={number}
        animation={animation}
        numberOfTicket={i + 1}
      />
    ));

    return <div className="main_table">{table}</div>;
  } else {
    return null;
  }
};

export default Tickets;
