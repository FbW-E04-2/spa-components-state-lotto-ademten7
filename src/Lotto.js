import React, { useState } from "react";
import { createLuckyNumbers, createSpecialNumber } from "./numbers";

function Lotto(props) {
  const generateNumbers = () => {
    let luckyNumbers = [];

    let randomNumber;
    let counter = 0;
    while (counter < 6) {
      randomNumber = createLuckyNumbers();
      if (luckyNumbers.includes(randomNumber)) {
        continue;
      } else {
        luckyNumbers = [...luckyNumbers, randomNumber];
        counter++;
      }
    }
    return luckyNumbers;
  };

  const [luckyNumbersOfState, setLuckyNumbersOfState] = useState([]);
  const [specialNumber, setSpecialNumber] = useState([]);
  const [show, setShow] = useState("");

  const getNewNumbers = () => {
    setLuckyNumbersOfState(generateNumbers());
    setSpecialNumber(createSpecialNumber());
    setShow("block");
  };

  const resetNumbers = () => {
    setLuckyNumbersOfState([]);
    setSpecialNumber([]);
    setShow("none");
  };

  console.log(luckyNumbersOfState);
  console.log("special" + specialNumber);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>{props.header}</h1>
      <p style={{ textAlign: "center" }}>{props.para}</p>
      <ul className="numbers">
        {luckyNumbersOfState.map((num) => {
          return (
            <li className="random-numbers" key={num}>
              <span>{num}</span>
            </li>
          );
        })}

        <li style={{ display: show }} className="specialNumber">
          {specialNumber}
        </li>
      </ul>
      <div className="buttons ">
        <button className="reset" onClick={resetNumbers}>
          Reset
        </button>
        <button className="show-time" onClick={getNewNumbers}>
          Show me lucky numbers
        </button>
      </div>
    </div>
  );
}

export default Lotto;

