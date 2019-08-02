/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config();

module.exports = {
  siteMetadata: {
    technologiesList: ['Java', 'javaScript', 'Angular', 'React', 'Gatsby', 'Spring'],
    letsTalk: 'Let\'s talk about potential freelance work, technology, or anything you want!'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`
      },
    },
    `gatsby-plugin-material-ui`, 
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN
      }
    }
  ],
  /* Your site config here */
}