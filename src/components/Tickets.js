import React from "react";
import OneTicket from "./OneTicket";

const Tickets = ({ coupons }) => {
  const numbers = [...coupons];

  if (numbers.length) {
    let table = numbers.map((number, i) => (
      <OneTicket key={i} coupon={number} />
    ));

    return <div className="main_table"> {table} </div>;
  } else {
    return null;
  }
};

export default Tickets;
