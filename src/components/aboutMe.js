import React from 'react';
import { css } from '@emotion/core';
import Image from 'gatsby-image';
import useImage from '../hooks/image';
const PostPreview = () => {
  const imageData = useImage('me.jpg');
  console.log(imageData);
  return (
    <article
      css={css`
        color: #444857;
        display: flex;
        @media (max-width: 450px) {
          display: block;
        }
        padding: 1.5rem 1.5rem 2rem;
        margin: 2rem 0;
      `}
    >
      <div
        css={css`
          width: 450px;
          @media (min-width: 900px) {
            width: 250px;
          }
          @media (max-width: 450px) {
            margin-left: auto;
            margin-right: auto;
            width: 50%;
          }
        `}
      >
        <Image
          css={css`
            * {
              margin-top: 0;
              border-radius: 50%;
            }
          `}
          fluid={imageData.node.childImageSharp.fluid}
          alt="Pranav"
        />
      </div>
      <div
        css={css`
          * {
            margin-left: 1rem;
            border-radius: 50%;
          }
        `}
      >
        <p>
          Hello! I'm Pranav, a software engineer by passion, love solving
          problem which requires thinking in terms of dynamic programing and
          hakerRank pattern problems and many more
          <br />
          Most loved thing in js is the closer property and figuring out life
          purpose
        </p>
      </div>
    </article>
  );
};

export default PostPreview;
