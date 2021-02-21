import React from 'react';
import PropTypes from 'prop-types';

const CounterMainBtns = (props) => {
  const {
    Style,
    autoClickDuration,
    isIncriment,
    switchMode,
    startAutoClick,
    incriment,
    stopAutoClick,
  } = props;
  return (
    <div className={Style.btnContainer}>
      <button onClick={incriment}>
        {isIncriment ? 'Increment' : 'Decrement'}
      </button>
      <button onClick={switchMode}>Switch mode</button>
      <div className={Style.autoClickContainer}>
        <button onClick={startAutoClick}>AutoClick </button>
        <div className={Style.autoClickDuration}>
          Ac Duration: {autoClickDuration}
        </div>
      </div>
      <button onClick={stopAutoClick}>Stop</button>
    </div>
  );
};
CounterMainBtns.propTypes = {
  Style: PropTypes.object,
  autoClickDuration: PropTypes.number,
  isIncriment: PropTypes.bool,
  siwtchMode: PropTypes.func,
  startAutoClick: PropTypes.func,
  incriment: PropTypes.func,
  stopAutoClick: PropTypes.func,
};

export default CounterMainBtns;
