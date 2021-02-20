import React, { Component } from 'react';
import styles from '../Slider.module.scss';
import cx from 'classnames';

class SliderImgWrapper extends Component {
  handeDoubleClick = (e) => {
    if (e.detail === 2) {
      this.props.switchFullScreen();
    }
  };

  render() {
    const { img, isFullScreen, prevSlide, nextSlide } = this.props;
    const fullScreen = cx({ [styles.fullScreen]: isFullScreen });

    return (
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <div
            onClick={prevSlide}
            className={cx(styles.leftSlide, styles.btnSlide, fullScreen)}
          >
            {'<'}
          </div>
          <img
            className={cx(fullScreen)}
            onClick={this.handeDoubleClick}
            src={img}
            alt="Some img"
          />
          <div
            onClick={nextSlide}
            className={cx(styles.rightSlide, styles.btnSlide, fullScreen)}
          >
            {'>'}
          </div>
        </div>
      </div>
    );
  }
}

export default SliderImgWrapper;
