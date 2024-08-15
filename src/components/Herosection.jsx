import React from 'react';
import Header from './Header';
import heroImg from '../assets/hero-imge.png';
import leftTop from '../assets/left-top-coin.png';
import rightBottom from '../assets/right-bottom-coin.png';
import leftBottom from '../assets/left-bottom-coin.png';
import backgroundImg from '../assets/bg-ENERGY.jpg';

const Herosection = () => {
  const heroSectionStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="herosec py-5" id='hero_sec' style={heroSectionStyle}>
      <Header />
      <div className="background-images">
        <img src={leftTop} alt="Left Top" className="background-image left-top" />
        <img src={rightBottom} alt="Right Bottom" className="background-image right-bottom" />
        <img src={leftBottom} alt="Left Bottom" className="background-image left-bottom" />
      </div>
      <div className="container py-5">
        <div className="row align-items-center position-relative">
          <div className="col-lg-6">
            <h1 className='text-lg-start text-center'>
            Xenergy Sunrise is a <span>Revolutionary</span>  Cryptocurrency
              {/* Experience the <span>Best</span> in Cryptocurrency */}
            </h1>
            <p>Aimed at integrating blockchain technology with the solar energy sector. Our mission is to streamline the adoption of solar PV systems, enhance transparency, and incentivize clean energy use through our unique token, XEnergy Sunrise.</p>
            <div className='d-flex justify-content-lg-start justify-content-center py-4'>
              <button className="btn-global me-3">Connect Wallet</button>
              <button className="btn-global text-white bg-transparent border">Trade Now</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className='text-lg-end text-center'>
              <img className='hero-img' src={heroImg} alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection;
