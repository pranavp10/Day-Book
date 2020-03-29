import React from 'react';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview-list';
import ReadLink from '../components/read-link';
import Footer from '../components/footer';
import HeroPost from '../components/hero-post';

import { graphql } from 'gatsby';
export const query = graphql`
  query($tag: String!) {
    allMdx(filter: { frontmatter: { section: { eq: $tag } } }) {
      nodes {
        frontmatter {
          title
          slug
          date
          section
          description
          image {
            sharp: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        excerpt
      }
    }
  }
`;
const postList = ({ data: { allMdx: postList } }) => {
  return (
    <>
      <HeroPost
        heading="The Browser Language"
        headingImage={`${postList.nodes[0].frontmatter.section}.png`}
      />
      <Layout>
        <h1>javascript</h1>
        {postList.nodes.map(post => (
          <PostPreview key={post.frontmatter.slug} post={post.frontmatter} />
        ))}
        <ReadLink to="/">⇦ back to all posts</ReadLink>
        <Footer />
      </Layout>
    </>
  );
};

export default postList;
