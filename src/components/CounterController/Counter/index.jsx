import React, { Component } from 'react';
import styles from '../Counter.module.css';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CounterOptions from './CounterOptions';
import CounterMainBtns from './CounterMainBtns';

class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      isIncriment: true,
      autoClickDuration: 0,
    };
    this.intervalId = null;
    this.autoClickDurationId = null;
    this.autoClickMaxDuration = 30;
  }

  siwtchMode = () => {
    this.setState({ isIncriment: !this.state.isIncriment });
  };
  checkValidNumber = number => {
    const num = Number(number);
    if (isNaN(num)) {
      this.props.unValid();
    } else {
      return num;
    }
  };
  handleChangeStep = ({ target: { value } }) => {
    this.props.setStep(this.checkValidNumber(value));
  };
  handleClickInteval = ({ target: { value } }) => {
    this.props.setClickInterval(this.checkValidNumber(value));
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
    const { autoClickInterval } = this.props;
    let { intervalId } = this;
    if (!intervalId) {
      this.intervalId = setInterval(this.incriment, autoClickInterval);
      this.autoClickDurationId = setInterval(() => {
        if (this.state.autoClickDuration >= this.autoClickMaxDuration - 1) {
          this.stopAutoClick();
          return;
        }
        this.setState({
          autoClickDuration: this.state.autoClickDuration + 1,
        });
      }, 1000);
    }
  };
  incriment = () => {
    const { count, isIncriment } = this.state;
    const { step } = this.props;
    this.setState({
      count: isIncriment ? count + step : count - step,
    });
  };
  componentDidMount () {
    this.startAutoClick();
  }

  render () {
    const { count, isIncriment, autoClickDuration } = this.state;
    const {
      step,
      showOptions,
      switchOptionVisible,
      autoClickInterval,
    } = this.props;
    return (
      <section>
        <div className={cx(styles.field, styles.count)}>Counter: {count}</div>
        <CounterMainBtns
          autoClickDuration={autoClickDuration}
          incriment={this.incriment}
          Style={styles}
          switchMode={this.siwtchMode}
          startAutoClick={this.startAutoClick}
          stopAutoClick={this.stopAutoClick}
          isIncriment={isIncriment}
        />
        <CounterOptions
          Style={styles}
          changeOptions={switchOptionVisible}
          autoClickInterval={autoClickInterval}
          setClickInterval={this.handleClickInteval}
          handleChangeStep={this.handleChangeStep}
          step={step}
          showOptions={showOptions}
        />
      </section>
    );
  }
}
Counter.propTypes = {
  step: PropTypes.number,
};
Counter.defaultProps = {
  step: 1,
};

export default Counter;
