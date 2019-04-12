import React from "react";
const OneTicket = ({ coupon }) => {
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

    return <div className="one_ticket"> {arr} </div>;
  } else {
    return null;
  }
};

export default OneTicket;
