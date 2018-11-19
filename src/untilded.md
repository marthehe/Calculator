if (this.state.memoryValue === '+') {
    this.setState({
      screenValue: add(parseInt(this.state.memoryValue), parseInt(this.state.screenValue)),
  });
  } else if (this.state.memoryValue === '-') {
    this.setState({
      screenValue: substract(parseInt(this.state.memoryValue), parseInt(this.state.screenValue)),
    });
  } else if (this.state.memoryValue === '/') {
    this.setState({
      screenValue: divide(parseInt(this.state.memoryValue), parseInt(this.state.screenValue)),
    });
  } else {
    this.setState({
      screenValue: multiply(parseInt(this.state.memoryValue), parseInt(this.state.screenValue)),
    });
  }
};

screenvalue: first value on screen
memoryvalue: when i click operator button screenvalue go to memory
operation value: when i click on operator button it perfoms calculation