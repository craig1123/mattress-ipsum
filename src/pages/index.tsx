import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Hero from '../components/Hero';
import SleepImage from '../components/SleepImage';

const IndexPage = () => (
  <Layout>
    <SEO />
    <SleepImage />
    <Hero />
  </Layout>
);

export default IndexPage;
