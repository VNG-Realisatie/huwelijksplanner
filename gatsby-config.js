module.exports = {
  siteMetadata: {
    title: `Huwelijksplanner`,
    description: `Demodam is a fictitious municipal website that shows which reusable open source products and services are available for municipalities. This website hosts the community governance and demodam information.`,
    author: `The Demodam Community`,
    repositoryUrl: `https://github.com/demodam/demodam.org/`,
    slackUrl: `https://samenorganiseren.slack.com/archives/C01S2QM81V4`,
    languages: ['en' ,'nl'],
    defaultLanguage: 'nl'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-check-links`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-images`,
        ]
      }
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `demodam.org`,
        },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Demodam`,
        short_name: `demodam`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/utrecht_logo.svg`,
      },
    },
    `gatsby-plugin-i18n`,
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'nl',
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
