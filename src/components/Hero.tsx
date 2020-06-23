import React, { useState } from 'react';
import { useCopyClipboard } from 'react-recipes';
import mattressIpsum from '../../lib/index';
import Button from './Button';
import headerImage from '../images/header.png';
import '../styles/hero.css';

const backgroundStyle = {
  backgroundImage: `url(${headerImage})`,
  position: 'absolute',
  top: 0,
  zIndex: -5,
  height: '100vh',
  width: '100%',
};

const Hero = () => {
  const [ipsum, setIpsum] = useState(() => mattressIpsum());
  const [isCopied, setIsCopied] = useCopyClipboard();

  const copy = () => {
    setIsCopied(ipsum);
  };

  return (
    <div className="hero-wrapper">
      {/* @ts-ignore */}
      <div style={backgroundStyle} />
      <h1 style={{ textAlign: 'center' }}>Mattress Ipsum</h1>
      <p style={{ textAlign: 'center', maxWidth: '475px' }}>The most comfortable Lorem Ipsum Generator. Snuggle in!</p>
      <Button onClick={() => setIpsum(mattressIpsum())} style={{ marginBottom: '20px' }}>
        Generate
      </Button>
      <div style={{ position: 'relative', width: '100%', height: 30 }}>
        <p onClick={copy} style={{ position: 'absolute', right: 0, top: 0, color: 'red', cursor: 'pointer' }}>
          {isCopied ? 'Copied' : 'Copy'}
        </p>
      </div>
      <textarea style={{ width: '100%', marginBottom: '50px' }} rows={15} readOnly value={ipsum}></textarea>
    </div>
  );
};

export default Hero;
