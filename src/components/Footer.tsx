import React from 'react';
import PropTypes from 'prop-types';

import { COLORS } from '../styles/constants';

const footerStyle = {
  padding: '1rem',
  backgroundColor: COLORS.lightGray,
  width: '100%',
  zIndex: -1,
};

const gridStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  fontSize: '.85rem',
};

const year = new Date().getFullYear();

const Footer = ({ siteTitle }) => (
  // @ts-ignore
  <footer style={footerStyle}>
    <div style={gridStyle}>
      <div style={{ color: COLORS.gray }}>
        © {year}
        {` `}
        Craig Walker
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
