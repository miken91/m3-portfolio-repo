/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: "Michael Noel",
    description: "A portfolio to present my interests and current projects",
    author: "Michael Noel",
    siteUrl: "https://www.mnoel3.com"
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://www.mnoel3.com",
        sitemap: "https://www.mnoel3.com/sitemap.xml",
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: "https://www.mnoel3.com",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
     resolve: `gatsby-plugin-material-ui`,
     options: {
       theme: {
         palette: {
           primary: {
              main: "#00e5ff",
           }
         },
       },
     },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        icon: `src/images/icon.png`,
      }
    }
  ],
  /* Your site config here */
}
