import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import HeroPost from '../components/hero-post';
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
      <HeroPost
        heading={post.frontmatter.title}
        headingImage={post.frontmatter.headerImage}
      />
      <Layout>
        <h1>{post.frontmatter.postHeading}</h1>
        <p
          css={css`
            font-size: 0.75rem;
          `}
        >
          Posted on {post.frontmatter.date}
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <ReadLink to={post.frontmatter.previousPost}>⇦ Previous</ReadLink>
          <ReadLink to={post.frontmatter.nextPost}>Next ➩</ReadLink>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default PostTemplate;
