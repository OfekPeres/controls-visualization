// Load Environment Variables for use in development vs production mode
// (i.e. our backend api url will be localhost in development but something
// else during production)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Controls Visualizer',
  },
  plugins: ['gatsby-plugin-postcss'],
};
