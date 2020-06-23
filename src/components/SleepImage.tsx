import React from 'react';
// import man from '../images/man.gif';

import starfish from '../images/starfish.gif';

import '../styles/sleep.css';

// NOTE: Gatsby caches the image anyways so it'll always be the same...
// const chooseRandomImage = () => {
//   const random = Math.floor(Math.random() * 10);
//   return random < 5 ? man : starfish;
// };

const SleepImage = () => {
  return (
    <div className="sleep-wrapper">
      <div className="sleep-image">
        <img src={starfish} alt="sleeping starfish" />
      </div>
    </div>
  );
};

export default SleepImage;
