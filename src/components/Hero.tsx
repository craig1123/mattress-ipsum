import React, { useState } from 'react';
import mattressIpsum from '../../lib/index';

import Button from './Button';
import headerImage from '../images/header.png';
import man from '../images/man.gif';
import starfish from '../images/starfish.gif';

const chooseRandomImage = () => {
  const random = Math.floor(Math.random() * 10);
  return random < 5 ? man : starfish;
};

const wrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '4rem 1rem',
};

const backgroundStyle = {
  backgroundImage: `url(${headerImage})`,
  position: 'absolute',
  top: 0,
  zIndex: -5,
  height: '100vh',
  width: '100%',
  // opacity: 0.5,
};

const Hero = ({ siteTitle }) => {
  const [image] = useState(() => chooseRandomImage());
  const [ipsum, setIpsum] = useState(() => mattressIpsum());

  return (
    // @ts-ignore
    <div style={wrapperStyle}>
      {/* @ts-ignore */}
      <div style={backgroundStyle} />
      <h1 style={{ textAlign: 'center' }}>Mattress Ipsum</h1>
      <p style={{ textAlign: 'center', maxWidth: '475px' }}>The most comfortable Lorem Ipsum Generator. Snuggle in!</p>
      <Button onClick={() => setIpsum(mattressIpsum())}>Generate</Button>
      <div style={{ margin: 60, width: `250px`, position: 'relative' }}>
        {/* <div
          style={{
            position: 'absolute',
            width: '250px',
            top: 0,
            right: 0,
          }}
        >
          <img src={image} alt="sleeping" />
        </div> */}
      </div>
      <textarea style={{ width: '100%' }} rows={15} readOnly value={ipsum}></textarea>
    </div>
  );
};

Hero.defaultProps = {
  siteTitle: ``,
};

export default Hero;
