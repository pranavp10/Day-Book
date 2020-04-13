import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { section: { eq: "MainList" } } }) {
        nodes {
          frontmatter {
            title
            slug
            author
            description
            image {
              sharp: childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
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
  }));
};

export default usePosts;
