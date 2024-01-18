import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
// import "../../../css/jobseeker/WhatClientSays.css";
import slider1 from '../../../assets/new1.jpeg';
import slider2 from '../../../assets/new2.jpeg';
import slider3 from '../../../assets/new3.jpeg';
import slider4 from '../../../assets/new4.jpg';
import slider5 from '../../../assets/new5.jpg';
import ramtak1 from '../../../assets/ramtak1.jpg';
import ramtak2 from '../../../assets/ramtak2.jpg';
import ramtak3 from '../../../assets/ramtak3.jpg';
import ramtak4 from '../../../assets/ramtak4.jpg';
import ramtak5 from '../../../assets/ramtak5.jpg';
import ramtak6 from '../../../assets/ramtak6.jpg';
import './TopHeader.css';
export default function TopHeader() {
  return (
    <div className="main_slider">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showIndicators={true}
        stopOnHover={true}
        autoFocus={true}
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        dots={true}
      >
        <div>
          <img className="sliderimg" src={ramtak1} />
        </div>
        <div>
          <img className="sliderimg" src={ramtak2} />
        </div>
        <div>
          <img className="sliderimg" src={ramtak3} />
        </div>

        <div>
          <img className="sliderimg" src={ramtak4} />
        </div>
        <div>
          <img className="sliderimg" src={ramtak5} />
        </div>
        <div>
          <img className="sliderimg" src={ramtak6} />
        </div>
      </Carousel>
    </div>
  );
}
