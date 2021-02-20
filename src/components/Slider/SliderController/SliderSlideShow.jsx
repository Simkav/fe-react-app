import React, { Component } from 'react';

class SliderSlideShow extends Component {
  render() {
    const { switchSlideShow, isSlideShow } = this.props;
    return (
      <div>
        <button onClick={switchSlideShow}>SlideShow</button>
        <span>{isSlideShow ? 'Enabled' : 'Disabled'}</span>
      </div>
    );
  }
}

export default SliderSlideShow;
