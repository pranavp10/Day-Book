import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Helmet from 'react-helmet';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import Footer from '../components/footer';
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        section
        postHeading
        headerImage
        nextPost
        previousPost
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{`Day Book | ${post.frontmatter.title}`}</title>
        <meta name="description" content={post.frontmatter.postHeading} />
      </Helmet>
      <Layout>
        <div css={css``}>
          <h1>{post.frontmatter.postHeading}</h1>
          <p
            css={css`
              font-size: 0.75rem;
            `}
          >
            Posted on {post.frontmatter.date}
          </p>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          {post.frontmatter.previousPost ? (
            <ReadLink
              to={`/${post.frontmatter.section}/${post.frontmatter.previousPost}`}
            >
              ⇦ Previous
            </ReadLink>
          ) : (
            <ReadLink to={post.frontmatter.section}>⇦ Previous</ReadLink>
          )}
          {post.frontmatter.nextPost ? (
            <ReadLink
              to={`/${post.frontmatter.section}/${post.frontmatter.nextPost}`}
            >
              Next ➩
            </ReadLink>
          ) : null}
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default PostTemplate;
