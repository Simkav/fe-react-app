import cx from 'classnames';

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

export default CounterOptions;
