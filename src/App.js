import React, { Component } from "react";
import "./calculator.css";
import Screen from "./components/Screen";
import NumberButton from "./components/NumberButton";
import {add} from './helpers/add';
import {substract} from './helpers/substract';
import {divide} from './helpers/divide';
import {multiply} from './helpers/multiply';

class App extends Component {
  
  state = {
    screenValue: 0,
    memoryValue: 0,
    operationValue: '',
  };

  onClick = value => {
    if (this.state.screenValue === 0 || this.state.memoryValue === this.state.screenValue) {
      this.setState({
        screenValue: value
      });
    } else {
      this.setState({
        screenValue: this.state.screenValue + value
      });
    }
  };

  onClear = () => {
    this.setState({
      screenValue: '0',
      memoryValue: '0',
    });
  };

  onBack = () => {
    this.setState({
      screenValue: this.state.screenValue.slice(0, -1)
    });
  }

 

  onSum = () => {
    if (this.state.operationValue === '+') {
      this.setState({
        screenValue: add(parseInt(this.state.memoryValue), parseInt(this.state.screenValue)),
    });
  } else if (this.state.operationValue === '-') {
    this.setState({
      screenValue: substract(parseInt(this.state.memoryValue), parseInt(this.state.screenValue)),
    });
  } else if (this.state.operationValue === '/') {
    this.setState({
      screenValue: divide(parseInt(this.state.memoryValue), parseInt(this.state.screenValue)),
    });
  } else {
    this.setState({
      screenValue: multiply(parseInt(this.state.memoryValue), parseInt(this.state.screenValue)),
    });
  }
   
  }
  
  onOperator = value => {
    console.log('glglgl')
    this.setState({
      memoryValue: this.state.screenValue,
      // i wanto to have dynamic value assigned to oparation value
      operationValue: value,
    });
  }
  
  // this.onOperator("/")

  render() {
    return (
      <div class="calc">
        <Screen screenValue={this.state.screenValue} />

        <section class="calc-buttons">
          <div class="calc-row">
            <button onClick={ this.onClear} className="double calc-button">C</button>
            <button onClick={ this.onBack} className="calc-button">←</button>
            <button onClick={ () => {this.onOperator("/")}} className="calc-button">/</button>
          </div>
          <div class="calc-row">
            <NumberButton number={'7'} onClick={this.onClick}/>
            <NumberButton number={'8'} onClick={this.onClick}/>
            <NumberButton number={'9'} onClick={this.onClick}/>
            <button onClick={ () => { this.onOperator("x") } } className="calc-button">x</button>
          </div>
          <div class="calc-row">
            <NumberButton number={'4'} onClick={this.onClick}/>
            <NumberButton number={'5'} onClick={this.onClick}/>
            <NumberButton number={'6'} onClick={this.onClick}/>
            <button onClick={ () => { this.onOperator("-") } } className="calc-button">-</button>
          </div>
          <div class="calc-row">
            <NumberButton number={'1'} onClick={this.onClick} />
            <NumberButton number={'2'} onClick={this.onClick}/>
            <NumberButton number={'3'} onClick={this.onClick}/>
            <button onClick={ () => { this.onOperator("+") } } className="calc-button">+</button>
          </div>
          <div class="calc-row">
            <NumberButton number={'0'} onClick={this.onClick} />
            <button onClick={ this.onSum } className="calc-button">=</button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
