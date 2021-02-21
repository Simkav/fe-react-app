import React, { Component } from 'react';
import styles from '../Slider.module.scss';
import cx from 'classnames';

class SliderImgWrapper extends Component {
  handeDoubleClick = (e) => {
    if (e.detail === 2) {
      this.props.switchFullScreen();
    }
  };

  createButton = (direction) => {
    const { isFullScreen, prevSlide, nextSlide } = this.props;
    const fullScreen = cx({ [styles.fullScreen]: isFullScreen });
    const isLeftBtn = direction === 0;
    return (
      <button
        onClick={isLeftBtn ? prevSlide : nextSlide}
        className={cx(
          isLeftBtn ? styles.leftSlide : styles.rightSlide,
          styles.btnSlide,
          fullScreen
        )}
      >
        {isLeftBtn ? '<' : '>'}
      </button>
    );
  };

  render() {
    const { img, isFullScreen } = this.props;
    const fullScreen = cx({ [styles.fullScreen]: isFullScreen });

    return (
      <div className={styles.imageWrapper}>
        {this.createButton(0)}
        <img
          className={cx(fullScreen)}
          onClick={this.handeDoubleClick}
          src={img}
          alt="Some img"
        />
        {this.createButton(1)}
      </div>
    );
  }
}

export default SliderImgWrapper;
