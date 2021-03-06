import React from 'react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';
const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;
  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #eee 2em, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;
  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }
  p,
  a {
    color: #444857;
    margin-top: 0;
  }
  a {
    margin-top: 0.5rem;
  }
`;

const Hero = ({ heading, headingImage }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const imageData = data.images.edges.find(dataList => {
    return dataList.node.relativePath.includes(headingImage);
  });

  return (
    <>
      {imageData != null ? (
        <ImageBackground
          Tag="section"
          fluid={imageData.node.childImageSharp.fluid}
          fadeIn="soft"
        >
          <TextBox>
            <h1>{heading}</h1>
          </TextBox>
        </ImageBackground>
      ) : (
        <TextBox>
          <h1>{heading}</h1>
        </TextBox>
      )}
    </>
  );
};

export default Hero;
