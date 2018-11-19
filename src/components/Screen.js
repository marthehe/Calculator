import React, { Component } from "react";

class ScreenDisplay extends Component {
    render() {
       const screenValue = this.props.screenValue
     
      return <div className="screen"> {screenValue} </div>
    }
  }

  export default ScreenDisplay;