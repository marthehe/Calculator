import React, { Component } from "react";

class NumberButton extends Component {
    render() {
       
      const number = this.props.number
      return (
          <button 
            onClick={() => { this.props.onClick(number) }} 
            className={"calc-button " + (number === '0' ? 'triple' : '')}
          >
            {number}
         </button>
      )
    }
  }

  export default NumberButton;