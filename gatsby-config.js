require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: 'Day Book',
    description:
      'A site where you can learn the core javascript and may more concept and how javascript runs under the hood',
    siteUrl: `https://daybook.netlify.app/`,
    author: `Pranav Patel`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Day Book`,
        short_name: `Day Book`,
        start_url: `/`,
        background_color: `#eee`,
        theme_color: `#eee`,
        display: `standalone`,
        icon: `images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-images' },
          { resolve: 'gatsby-remark-copy-linked-files' },
        ],
        plugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    'gatsby-remark-reading-time',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'algorithm',
        path: 'algorithm',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'javascript',
        path: 'javascript',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'post-list',
        path: 'post-list',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#444857`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
  ],
};
