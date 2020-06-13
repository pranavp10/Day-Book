import React from 'react';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview-list';
import ReadLink from '../components/read-link';
import Footer from '../components/footer';
import HeroPost from '../components/hero-post';
import SEO from '../components/seo';

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
        excerpt
      }
    }
    displayHeading: allMdx(filter: { frontmatter: { tag: { eq: $tag } } }) {
      nodes {
        frontmatter {
          description
          tag
        }
        excerpt
      }
    }
  }
`;
const postList = ({ data }) => {
  const postList = data.listData;
  const headingData = data.displayHeading.nodes[0].frontmatter;
  let description = '';
  postList.nodes.forEach(element => {
    description += element.excerpt;
  });
  data.displayHeading.nodes.forEach(element => {
    description += element.excerpt;
  });
  return (
    <>
      <SEO title={headingData.tag} description={`Learn | ${description}`} />
      <HeroPost
        heading={headingData.description}
        headingImage={`${headingData.tag}.png`}
      />
      <Layout>
        <h1>{headingData.tag}</h1>
        {postList.nodes.map(post => (
          <PostPreview key={post.frontmatter.slug} post={post.frontmatter} />
        ))}
        <ReadLink to="/">⇦ Explore</ReadLink>
        <Footer />
      </Layout>
    </>
  );
};

export default postList;
