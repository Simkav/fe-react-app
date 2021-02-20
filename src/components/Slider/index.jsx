import React, { Component } from 'react';
import SliderController from './SliderController/SliderController';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isSlideShow: false,
      isFullScreen: false,
    };
  }

  setIndex = (index) => {
    this.setState({ currentIndex: index });
  };

  prevSlide = () => {
    const { currentIndex } = this.state;
    const length = this.props.slides.length;
    this.setIndex((currentIndex - 1 + length) % length);
  };
  nextSlide = () => {
    const { currentIndex } = this.state;
    const length = this.props.slides.length;
    this.setIndex((currentIndex + 1) % length);
  };

  switchSlideShow = () => {
    this.setState({
      isSlideShow: !this.state.isSlideShow,
    });
  };

  switchFullScreen = () => {
    this.setState({
      isFullScreen: !this.state.isFullScreen,
    });
  };
  componentDidUpdate() {
    //TODO Fix timeout stacking refactor this
    console.log('test');
    const { isSlideShow } = this.state;
    setTimeout(() => {
      if (isSlideShow) {
        this.nextSlide();
      }
    }, 2500);
  }

  render() {
    const { slides: DB } = this.props;
    const { currentIndex, isFullScreen, isSlideShow } = this.state;
    return (
      <SliderController
        switchSlideShow={this.switchSlideShow}
        isSlideShow={isSlideShow}
        nextSlide={this.nextSlide}
        prevSlide={this.prevSlide}
        isFullScreen={isFullScreen}
        slide={DB[currentIndex]}
        switchFullScreen={this.switchFullScreen}
      />
    );
  }
}

export default Slider;
