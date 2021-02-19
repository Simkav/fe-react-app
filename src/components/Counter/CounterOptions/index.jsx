import cx from 'classnames';
import PropTypes from 'prop-types';

function CounterOptions(props) {
  const {
    Style,
    showOptions,
    autoClickInterval,
    step,
    changeIntervalTime,
    handleChangeStep,
    changeOptions,
  } = props;
  return (
    <>
      <button onClick={changeOptions}>Options</button>
      <div className={cx({ [Style.hidden]: showOptions })}>
        Interval time(ms):
        <input
          onChange={changeIntervalTime}
          value={autoClickInterval}
        ></input>{' '}
        <div className={cx(Style.field, Style.step)}>
          Step: <input onChange={handleChangeStep} value={step}></input>
        </div>
      </div>
    </>
  );
}
CounterOptions.propTypes = {
  Style: PropTypes.object,
  showOptions: PropTypes.bool.isRequired,
  autoClickInterval: PropTypes.number,
  step: PropTypes.number.isRequired,
  changeIntervalTime: PropTypes.func,
  handleChangeStep: PropTypes.func,
  changeOptions: PropTypes.func,
};

export default CounterOptions;
