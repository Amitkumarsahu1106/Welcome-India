import React from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

function Carousel() {
  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide"><img src="assets/images/image1.jpg" alt="Image 1" /></div>
        <div className="swiper-slide"><img src="assets/images/image2.jpg" alt="Image 2" /></div>
        <div className="swiper-slide"><img src="assets/images/image3.jpg" alt="Image 3" /></div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
}

export default Carousel;
