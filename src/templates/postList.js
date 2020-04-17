import React from 'react';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview-list';
import ReadLink from '../components/read-link';
import Footer from '../components/footer';
import HeroPost from '../components/hero-post';
import Helmet from 'react-helmet';

import { graphql } from 'gatsby';
export const query = graphql`
  query($tag: String!) {
    listData: allMdx(
      filter: { frontmatter: { section: { eq: $tag } } }
      sort: { fields: [frontmatter___postNumber], order: ASC }
    ) {
      nodes {
        frontmatter {
          title
          slug
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
      }
    }
    displayData: allMdx(filter: { frontmatter: { tag: { eq: $tag } } }) {
      nodes {
        frontmatter {
          description
          tag
        }
      }
    }
  }
`;
const postList = ({ data }) => {
  const postList = data.listData;
  const headingData = data.displayData.nodes[0].frontmatter;
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{`Day Book | ${headingData.tag}`}</title>
        <meta name="description" content={headingData.description} />
      </Helmet>
      <HeroPost
        heading={headingData.description}
        headingImage={`${headingData.tag}.png`}
      />
      <Layout>
        <h1>{headingData.tag}</h1>
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
