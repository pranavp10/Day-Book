module.exports = {
  siteMetadata: {
    title: 'Day Book',
    description:
      'A site where you can learn the core javascript and may more concept and how javascript runs under the hood',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
        plugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts-algorithm',
        path: 'posts-algorithm',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts-javascript',
        path: 'posts-javascript',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts-react',
        path: 'posts-react',
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
  ],
};
