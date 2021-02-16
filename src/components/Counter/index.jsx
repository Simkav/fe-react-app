import React, { Component } from 'react';
import Style from './Counter.module.css';
import cx from 'classnames';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isIncriment: true,
      isValid: true,
      step: 1,
      intervalTime: 1000,
      showOptions: true,
    };
    this.intervalId = null;
  }

  siwtchMode = () => {
    this.setState({ isIncriment: !this.state.isIncriment });
  };
  handleChangeStep = (e) => {
    const value = this.checkValidNumber(e.target.value);
    this.setState({
      step: value,
    });
  };

  changeIntervalTime = (e) => {
    const value = this.checkValidNumber(e.target.value);
    this.setState({
      intervalTime: value,
    });
  };
  checkValidNumber = (number) => {
    const num = Number(number);
    if (isNaN(num)) {
      console.log(num);
      this.setState({ isValid: false });
    } else {
      return num;
    }
  };
  handleChaneOptions = () => {
    this.setState({
      showOptions: !this.state.showOptions,
    });
  };
  stopAutoClick = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  };
  startAutoClick = () => {
    this.stopAutoClick();
    const { intervalTime } = this.state;
    let { intervalId } = this;
    if (!intervalId) {
      this.intervalId = setInterval(this.incriment, intervalTime);
    }
  };
  incriment = () => {
    const { step, count, isIncriment } = this.state;
    this.setState({
      count: isIncriment ? count + step : count - step,
    });
  };
  componentDidMount() {
    const { step } = this.props;
    this.setState({ step: step });
    this.checkValidNumber(this.props.step);
    this.startAutoClick();
  }

  render() {
    const { count, isValid, step, intervalTime, showOptions } = this.state;
    if (!isValid) {
      return <>Something go wrong, reload app</>;
    }
    return (
      <section>
        <div className={Style.fieldContainer}>
          <div className={cx(Style.field, Style.count)}>Counter: {count}</div>
        </div>
        <div className={Style.container}>
          <button
            className={cx(Style.incrimentBtn, Style.btn)}
            onClick={this.incriment}
          >
            Quick math
          </button>
          <button
            className={cx(Style.switchModeBtn, Style.btn)}
            onClick={this.siwtchMode}
          >
            Switch mode
          </button>
        </div>
        <div className={Style.fieldContainer}>
          <button onClick={this.startAutoClick}>AutoClick</button>
          <button onClick={this.stopAutoClick}>Stop</button>
        </div>
        <button onClick={this.handleChaneOptions}>Options</button>
        <div className={cx({ [Style.hidden]: showOptions })}>
          Interval time:{' '}
          <input
            onChange={this.changeIntervalTime}
            value={intervalTime}
          ></input>{' '}
          <div className={cx(Style.field, Style.step)}>
            Step: <input onChange={this.handleChangeStep} value={step}></input>
          </div>
        </div>
      </section>
    );
  }
}

export default Counter;
