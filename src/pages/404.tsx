import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import lonely from '../images/lonely.gif';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '4rem 1rem',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1>Page not Found :(</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <div style={{ margin: 60, width: `250px`, position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              width: '250px',
              top: 0,
            }}
          >
            <img src={lonely} alt="outlines of shapes and confetti in the background " />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
