import React, { Component } from "react";
import "./calculator.css";
import Screen from "./components/Screen";
import NumberButton from "./components/NumberButton";
import { add } from "./helpers/add";
import { substract } from "./helpers/substract";
import { divide } from "./helpers/divide";
import { multiply } from "./helpers/multiply";

class App extends Component {
  state = {
    screenValue: 0,
    memoryValue: 0,
    operationValue: ""
  };

  setScreenValue = value => {
    this.setState({
      screenValue: value
    });
  };

  onClick = value => {
    if (
      this.state.screenValue === 0 ||
      this.state.memoryValue === this.state.screenValue
    ) {
      this.setScreenValue(value);
    } else if (this.state.operationValue === "=") {
      this.setScreenValue(value);
      this.setState({
        operationValue: ""
      });
    } else {
      const newValue = this.state.screenValue + value;
      this.setScreenValue(newValue);
    }
  };

  onClear = () => {
    this.setState({
      screenValue: "0",
      memoryValue: "0"
    });
  };

  onBack = () => {
    if (this.state.screenValue.length === 1) {
      this.setScreenValue("0");
    } else {
      this.setState({
        screenValue: this.state.screenValue.toString().slice(0, -1)
      });
    }
  };

  onSum = () => {
    const memoryValue = parseInt(this.state.memoryValue);
    const screenValue = parseInt(this.state.screenValue);

    if (this.state.operationValue === "+") {
      const value = add(memoryValue, screenValue);
      this.setScreenValue(value);
    } else if (this.state.operationValue === "-") {
      const value = substract(memoryValue, screenValue);
      this.setScreenValue(value);
    } else if (this.state.operationValue === "/") {
      const value = divide(memoryValue, screenValue);
      this.setScreenValue(value);
    } else {
      const value = multiply(memoryValue, screenValue);
      this.setScreenValue(value);
    }

    this.setState({
      operationValue: "="
    });
  };

  onOperator = value => {
    this.setState({
      memoryValue: this.state.screenValue,
      // i wanto to have dynamic value assigned to oparation value
      operationValue: value
    });
  };

  // this.onOperator("/")

  render() {
    return (
      <div className="container">
        <div class="calc">
          <Screen screenValue={this.state.screenValue} />

          <section class="calc-buttons">
            <div class="calc-row">
              <button onClick={this.onClear} className="double calc-button">
                C
              </button>
              <button onClick={this.onBack} className="calc-button">
                ←
              </button>
              <button
                onClick={() => {
                  this.onOperator("/");
                }}
                className="calc-button"
              >
                /
              </button>
            </div>
            <div class="calc-row">
              <NumberButton number={"7"} onClick={this.onClick} />
              <NumberButton number={"8"} onClick={this.onClick} />
              <NumberButton number={"9"} onClick={this.onClick} />
              <button
                onClick={() => {
                  this.onOperator("x");
                }}
                className="calc-button"
              >
                x
              </button>
            </div>
            <div class="calc-row">
              <NumberButton number={"4"} onClick={this.onClick} />
              <NumberButton number={"5"} onClick={this.onClick} />
              <NumberButton number={"6"} onClick={this.onClick} />
              <button
                onClick={() => {
                  this.onOperator("-");
                }}
                className="calc-button"
              >
                -
              </button>
            </div>
            <div class="calc-row">
              <NumberButton number={"1"} onClick={this.onClick} />
              <NumberButton number={"2"} onClick={this.onClick} />
              <NumberButton number={"3"} onClick={this.onClick} />
              <button
                onClick={() => {
                  this.onOperator("+");
                }}
                className="calc-button"
              >
                +
              </button>
            </div>
            <div class="calc-row">
              <NumberButton number={"0"} onClick={this.onClick} />
              <button onClick={this.onSum} className="calc-button">
                =
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
