import React, { useState } from 'react';
import { useCopyClipboard } from 'react-recipes';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
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
  const [numOfPara, setNumOfPara] = useState(4);
  const [numOfWords, setNumOfWords] = useState(50);
  const [isCopied, setIsCopied] = useCopyClipboard();

  const copy = () => {
    // @ts-ignore
    setIsCopied(ipsum);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const para = numOfPara > 50 ? 50 : numOfPara;
    const word = numOfWords > 500 ? 50 : numOfWords;
    setIpsum(mattressIpsum(para, word));
    trackCustomEvent({
      category: 'Generate',
      action: 'Click',
    });
  };

  return (
    <div className="hero-wrapper">
      {/* @ts-ignore */}
      <div style={backgroundStyle} />
      <h1 style={{ textAlign: 'center' }}>Mattress Ipsum</h1>
      <p style={{ textAlign: 'center', maxWidth: '475px' }}>The most comfortable Lorem Ipsum Generator. Snuggle in!</p>
      <form onSubmit={onSubmit} className="form-wrapper">
        <div>
          <label>Paragraphs </label>
          <input
            type="number"
            min={1}
            max={50}
            value={numOfPara}
            onChange={(e) => setNumOfPara(Number(e.target.value))}
            className="hero-input"
          />
        </div>
        <div>
          <label>Phrases </label>
          <input
            type="number"
            min={1}
            max={500}
            value={numOfWords}
            onChange={(e) => setNumOfWords(Number(e.target.value))}
            className="hero-input"
          />
        </div>
        <Button>Generate</Button>
      </form>
      <div style={{ position: 'relative', width: '100%', height: 30 }}>
        <p
          onClick={copy}
          style={{ position: 'absolute', right: 0, top: 0, color: isCopied ? 'red' : 'black', cursor: 'pointer' }}
        >
          {isCopied ? 'Copied' : 'Copy'}
        </p>
      </div>
      <textarea style={{ width: '100%', marginBottom: '50px' }} rows={15} readOnly value={ipsum}></textarea>
    </div>
  );
};

export default Hero;
