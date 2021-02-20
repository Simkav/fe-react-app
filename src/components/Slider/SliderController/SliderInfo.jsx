import React from 'react';
import styles from '../Slider.module.scss';

const SliderInfo = (props) => {
  const { slide } = props;
  return (
    <div className={styles.slideInfo}>
      <h1 className={styles.slideTitle}>{slide.title}</h1>
      <p className={styles.description}>{slide.description}</p>
    </div>
  );
};

export default SliderInfo;
