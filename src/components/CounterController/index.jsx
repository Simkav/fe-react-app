import React, { Component } from 'react';
import Counter from './Counter';

class CounterController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoClickInterval: 1000,
      step: 1,
      isValid: true,
      showOptions: false,
    };
  }
  setStep = (n) => {
    this.setState({ step: n });
  };
  setClickInterval = (n) => {
    this.setState({ autoClickInterval: n });
  };
  switchOptionVisible = () => {
    this.setState({ showOptions: !this.state.showOptions });
  };
  unValidCounter = () => {
    this.setState({ isValid: false });
  };

  render() {
    const { isValid, step, showOptions, autoClickInterval } = this.state;
    if (!isValid) {
      return <>Something go wrong, reload app</>;
    }
    return (
      <Counter
        step={step}
        showOptions={showOptions}
        switchOptionVisible={this.switchOptionVisible}
        setClickInterval={this.setClickInterval}
        setStep={this.setStep}
        unValid={this.unValidCounter}
        autoClickInterval={autoClickInterval}
      />
    );
  }
}

export default CounterController;
