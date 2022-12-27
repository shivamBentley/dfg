import React from "react";
import '../../styles/page/Hero.scss'
import {personData} from '../../db/person.js'
function Hero() {
  return <div id="Hero">
    <div className="hero-flex">
      <div className='hero-description'>
        <p >{personData.description}</p>
      </div>
      <div className="hero-image">
        <img src="https://www.shutterstock.com/image-vector/hand-drawn-modern-man-avatar-260nw-1373616881.jpg" alt="" srcset="" />
      </div>
    </div>
  </div>;
}

export default Hero;
