import { useStaticQuery, graphql } from 'gatsby';

const Image = filename => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fixed(width: 50, height: 50) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  const imageData = data.images.edges.find(dataList => {
    return dataList.node.relativePath.includes(filename);
  });
  return imageData;
};

export default Image;
