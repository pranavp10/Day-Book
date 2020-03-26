import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { section: { eq: "react" } } }) {
        nodes {
          frontmatter {
            title
            slug
            author
            description
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 100, maxHeight: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);
  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    author: post.frontmatter.author,
    description: post.frontmatter.description,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
    section: 'posts-react',
  }));
};

export default usePosts;
