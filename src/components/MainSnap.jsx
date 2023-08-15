import React from 'react';
import databiz from '../assets/client-databiz.svg';
import audiophile from '../assets/client-audiophile.svg';
import meet from '../assets/client-meet.svg';
import maker from '../assets/client-maker.svg';
import imageMain from '../assets/image-hero-desktop.png';

const MainSnap = () => {
  return (
    <main className='main-container'>
        <div className='main-left-wrapper'>
            <div className='main-content'>
                <h2 className='main-title'>Make remote work</h2>
                <p className='main-description'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button className='main-btn'>learn more</button>
            </div>
            <div className='main-images-wrapper'>
                <img src={databiz} alt="main-image" />
                <img src={audiophile} alt="main-image" />
                <img src={meet} alt="main-image" />
                <img src={maker} alt="main-image" />
            </div>
        </div>
        <div className="main-right-wrapper">
            <img src={imageMain} className='img-main-right' alt="image-main" />
        </div>
    </main>
  )
};

export default MainSnap;
