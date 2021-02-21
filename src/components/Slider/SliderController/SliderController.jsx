import React from 'react';
import SliderImgWrapper from './SliderImgWrapper';
import SlideInfo from './SliderInfo';
import styles from '../Slider.module.scss';
import SliderSlideShow from './SliderSlideShow';

const SliderController = (props) => {
  const {
    slide,
    isFullScreen,
    switchFullScreen,
    prevSlide,
    nextSlide,
    switchSlideShow,
    isSlideShow,
  } = props;

  const isNotFullScreen = (
    <>
      <SliderSlideShow
        className={styles.slideShow}
        switchSlideShow={switchSlideShow}
        isSlideShow={isSlideShow}
        nextSlide={nextSlide}
      />
      <SlideInfo slide={slide} />
    </>
  );
  return (
    <section className={styles.slider}>
      <SliderImgWrapper
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        switchFullScreen={switchFullScreen}
        isFullScreen={isFullScreen}
        img={slide.src}
      />
      {isFullScreen ? <></> : isNotFullScreen}
    </section>
  );
};

export default SliderController;
