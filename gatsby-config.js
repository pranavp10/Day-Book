module.exports = {
  siteMetadata: {
    title: 'Day Book',
    description:
      'A site where you can learn the core javascript and may more concept and how javascript runs under the hood',
    siteUrl: `https://daybook.netlify.app/`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
  ],
};
