const config = require('./src/config.ts');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.twitterHandle,
    siteUrl: config.siteUrl,
    name: config.name,
    job:  config.siteJob,
    ...config,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `playground`,
        path: `${__dirname}/src/pages/playground`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-transition-link`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `http://nnajivictormev2.local/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/PlayGroundTemplate.tsx'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/_utils/algolia-queries")
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-graphql-codegen',
    //   options: {
    //     fileName: `__generated__/graphql-types.d.ts`,
    //   },
    // },
      
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
