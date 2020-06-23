module.exports = {
  pathPrefix: '/mattress-ipsum',
  siteMetadata: {
    title: `Mattress Ipsum`,
    description: `The most comfortable lorem ipsum generator. Snuggle up!`,
    author: `@craigwalker1123`,
    siteUrl: `https://craig1123.github.io/mattress-ipsum/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-68311616-9',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
