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
  return (
    <section className={styles.slider}>
      <SliderImgWrapper
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        switchFullScreen={switchFullScreen}
        isFullScreen={isFullScreen}
        img={slide.src}
      />
      {isFullScreen ? (
        <></>
      ) : (
        <>
          <SliderSlideShow
            switchSlideShow={switchSlideShow}
            isSlideShow={isSlideShow}
            nextSlide={nextSlide}
          />
          <SlideInfo slide={slide} />
        </>
      )}
    </section>
  );
};

export default SliderController;
