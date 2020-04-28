const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('./src/templates/post.js');
  const listPost = path.resolve('./src/templates/postList.js');
  const result = await graphql(`
    query {
      post: allMdx(
        skip: 2
        sort: {
          order: ASC
          fields: [frontmatter___section, frontmatter___postNumber]
        }
      ) {
        nodes {
          frontmatter {
            slug
            section
            title
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

  posts.forEach((post, index) => {
    let presentSection = post.frontmatter.section;
    let nextPost = index === posts.length - 1 ? null : posts[index + 1];
    let previousPost = index === 0 ? null : posts[index - 1];
    let next, prev;
    if (nextPost != null) {
      let nextSection = nextPost.frontmatter.section;
      if (presentSection === nextSection) {
        next = nextPost.frontmatter;
      } else {
        next = null;
      }
    } else {
      next = null;
    }
    if (previousPost != null) {
      let previousSection = previousPost.frontmatter.section;
      if (presentSection === previousSection) {
        prev = previousPost.frontmatter;
      } else {
        prev = null;
      }
    } else {
      prev = null;
    }
    createPage({
      path: `${post.frontmatter.section}/${post.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.frontmatter.slug,
        section: post.frontmatter.section,
        next: next,
        prev: prev,
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
