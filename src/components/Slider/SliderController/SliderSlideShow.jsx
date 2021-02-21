import React, { Component } from 'react';
import styles from '../Slider.module.scss';

class SliderSlideShow extends Component {
  render() {
    const { switchSlideShow, isSlideShow } = this.props;
    return (
      <div className={styles.slideShowContainer}>
        <button onClick={switchSlideShow}>SlideShow</button>
        <span>{isSlideShow ? 'Enabled' : 'Disabled'}</span>
      </div>
    );
  }
}

export default SliderSlideShow;
