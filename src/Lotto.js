import React, { Component } from "react";
import { createLuckyNumbers, createSpecialNumber } from "./numbers";

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

export default class Lotto extends Component {
  state = {
    luckyNumbersOfState: [],
    specialNumber: [],
  };

  getNewNumbers = () => {
    this.setState({
      luckyNumbersOfState: generateNumbers(),
      specialNumber: createSpecialNumber(),
      show: "block",
    });
  };

  resetNumbers = () => {
    this.setState({
      luckyNumbersOfState: [],
      specialNumber: [],
      show: "none",
    });
  };

  render() {
    console.log(this.state.luckyNumbersOfState);
    console.log("special" + this.state.specialNumber);

    return (
      <div className="container">
        <h1 style={{ textAlign: "center" }}>{this.props.header}</h1>
        <p style={{ textAlign: "center" }}>{this.props.para}</p>
        <ul className="numbers">
          {this.state.luckyNumbersOfState.map((num) => {
            return (
              <li className="random-numbers" key={num}>
                <span>{num}</span>
              </li>
            );
          })}

          <li style={{ display: this.state.show }} className="specialNumber">
            {this.state.specialNumber}
          </li>
        </ul>
        <div className="buttons ">
          <button className="reset" onClick={this.resetNumbers}>
            Reset
          </button>
          <button className="show-time" onClick={this.getNewNumbers}>
            Show me lucky numbers
          </button>
        </div>
      </div>
    );
  }
}
