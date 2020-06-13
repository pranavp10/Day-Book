import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import Image from 'gatsby-image';
import image from '../hooks/image';
import DisplayNextPrev from '../components/displayNextPrev';
import SEO from '../components/seo';
export default () => {
  const imageData = image('404.png');
  return (
    <>
      <SEO
        title="Learn |404 Page not found"
        description="Learn |404 Page not found"
      />
      <Layout>
        <h1
          css={css`
            text-align: center;
          `}
        >
          404 Page Not found
        </h1>
        <div
          css={css`
            width: auto;
            color: #444857;
            margin-top: 0;
            border-radius: 10px;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 0.5rem;
          `}
        >
          <Image
            css={css`
              * {
                margin-top: 0;
                border-radius: 50%;
                padding: 5px;
              }
            `}
            fluid={imageData.node.childImageSharp.fluid}
            alt="404"
          />
          <h1>Oops!</h1>
          <h3>
            What you are looking for may have been misplaced in Long Term Memory
          </h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <DisplayNextPrev to="/">
              <p style={{ color: '#BDBDBD', textAlign: 'left' }}>HOME</p>
              Explore & Learn
            </DisplayNextPrev>
            <DisplayNextPrev to="/algorithm">
              <p style={{ color: '#BDBDBD', textAlign: 'center' }}>Learn</p>
              Algorithm
            </DisplayNextPrev>
            <DisplayNextPrev to="/about">
              <p style={{ color: '#BDBDBD', textAlign: 'right' }}>ABOUT</p>
              Site Developer
            </DisplayNextPrev>
          </div>
        </div>
      </Layout>
    </>
  );
};
