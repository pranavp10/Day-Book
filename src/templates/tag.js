import React from 'react';
import Layout from '../components/layout';
import Tag from '../components/tag';
import ReadLink from '../components/read-link';
import Footer from '../components/footer';
import SEO from '../components/seo';
export const query = graphql`
  query($tag: String!) {
    allMdx(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      nodes {
        frontmatter {
          title
          slug
          section
          description
          date(formatString: "MMMM Do, YYYY")
          tags
          image {
            sharp: childImageSharp {
              fixed(width: 50, height: 50) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        excerpt
      }
    }
  }
`;
const tag = ({ pageContext, data }) => {
  const list = data.allMdx.nodes;
  return (
    <>
      <SEO
        title={pageContext.tag}
        description={`Day Book | ${pageContext.tag}`}
      />
      <Layout>
        <h1>Tag {pageContext.tag}</h1>
        {list.map(post => (
          <Tag key={post.frontmatter.slug} post={post.frontmatter} />
        ))}
        <ReadLink to="/">⇦ Explore</ReadLink>
        <Footer />
      </Layout>
    </>
  );
};

export default tag;
