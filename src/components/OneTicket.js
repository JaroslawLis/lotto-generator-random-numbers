import React from "react";
const OneTicket = ({ coupon, animation, numberOfTicket }) => {
  const numbers = [...coupon];

  if (numbers.length) {
    let arr = [];
    for (let i = 1; i < 50; i++) {
      let match = numbers.find(el => el === i);
      let div =
        i === match ? (
          <div key={i} className="full_number">
            {i}
          </div>
        ) : (
          <div key={i}> {i} </div>
        );
      arr.push(div);
    }

    return (
      <div className="one_ticket" data-aos={animation}>
        <br />
        {arr}
        <span>Wylosowane liczby</span>
        <span>{numbers.sort((a, b) => a - b).join(", ")}</span>
        <h3>Kupon nr {numberOfTicket}</h3>
      </div>
    );
  } else {
    return null;
  }
};

export default OneTicket;
