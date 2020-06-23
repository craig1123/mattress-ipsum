import React, { useState } from 'react';
import man from '../images/man.gif';
import starfish from '../images/starfish.gif';

import '../styles/sleep.css';

const chooseRandomImage = () => {
  const random = Math.floor(Math.random() * 10);
  return random < 5 ? man : starfish;
};

const SleepImage = () => {
  const [image] = useState(() => chooseRandomImage());

  return (
    <div className="sleep-wrapper">
      <div className="sleep-image">
        <img src={image} alt="sleeping" />
      </div>
    </div>
  );
};

export default SleepImage;
