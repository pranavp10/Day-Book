const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('./src/templates/post.js');
  const listPost = path.resolve('./src/templates/postList.js');
  const result = await graphql(`
    query {
      post: allMdx(sort: { fields: [frontmatter___section] }) {
        nodes {
          frontmatter {
            slug
            section
          }
        }
      }
      postsList: allFile(filter: { sourceInstanceName: { eq: "post-list" } }) {
        nodes {
          childMdx {
            frontmatter {
              tag
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }
  const posts = result.data.post.nodes;

  posts.forEach(post => {
    createPage({
      path: `${post.frontmatter.section}/${post.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.frontmatter.slug,
        section: post.frontmatter.section,
      },
    });
  });

  const postsList = result.data.postsList.nodes;

  postsList.forEach(post => {
    if (post.childMdx !== null) {
      createPage({
        path: `${post.childMdx.frontmatter.tag}`,
        component: listPost,
        context: {
          tag: post.childMdx.frontmatter.tag,
        },
      });
    }
  });
};
