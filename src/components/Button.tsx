import React from 'react';

import { COLORS, BORDER_RADIUS, GRADIENT } from '../styles/constants';
import '../styles/button.css';

const btnStyle = {
  padding: '.5rem 2.5rem',
  color: COLORS.lightWhite,
  fontWeight: 700,
  background: GRADIENT,
  borderRadius: BORDER_RADIUS,
  borderWidth: 0,
  cursor: 'pointer',
};

const Button = ({ children, style, ...rest }) => (
  <button style={{ ...style, ...btnStyle }} {...rest}>
    {children}
  </button>
);

export default Button;
