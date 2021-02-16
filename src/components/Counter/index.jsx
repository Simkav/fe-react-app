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
      autoClickInterval: 1000,
      showOptions: true,
      autoClickDuration: 0,
    };
    this.autoClickDurationId = null;
    this.autoClickMaxDuration = 30;
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
      autoClickInterval: value,
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
    clearInterval(this.autoClickDurationId);
    this.autoClickDurationId = null;
    this.setState({
      autoClickDuration: 0,
    });
  };
  startAutoClick = () => {
    const { autoClickInterval } = this.state;
    let { autoClickDuration } = this.state;
    let { intervalId } = this;
    if (!intervalId) {
      this.intervalId = setInterval(this.incriment, autoClickInterval);
      this.autoClickDurationId = setInterval(() => {
        this.setState({ autoClickDuration: ++autoClickDuration });
      }, 1000);
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
  componentDidUpdate() {
    if (this.state.autoClickDuration >= this.autoClickMaxDuration) {
      this.stopAutoClick();
    }
  }

  render() {
    const {
      count,
      isValid,
      step,
      autoClickInterval,
      showOptions,
      autoClickDuration,
    } = this.state;
    if (!isValid) {
      return <>Something go wrong, reload app</>;
    }
    return (
      <section>
        <div className={cx(Style.field, Style.count)}>Counter: {count}</div>
        <div className={Style.btnContainer}>
          <button
            className={cx(Style.incrimentBtn, Style.btn)}
            onClick={this.incriment}
          >
            Incriment
          </button>
          <button
            className={cx(Style.switchModeBtn, Style.btn)}
            onClick={this.siwtchMode}
          >
            Switch mode
          </button>
          <div className={Style.autoClickContainer}>
            <button onClick={this.startAutoClick}>AutoClick </button>
            <div className={Style.autoClickDuration}>{autoClickDuration}</div>
          </div>
          <button onClick={this.stopAutoClick}>Stop</button>
        </div>
        <button onClick={this.handleChaneOptions}>Options</button>
        <div className={cx({ [Style.hidden]: showOptions })}>
          Interval time:
          <input
            onChange={this.changeIntervalTime}
            value={autoClickInterval}
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
