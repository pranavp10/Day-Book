import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import Image from 'gatsby-image';
import image from '../hooks/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/quotes.css';
import SEO from '../components/seo';
const Honour = () => {
  const imageData = image('winners.png');
  return (
    <>
      <SEO
        title="Congratulations"
        description="Day Book | Hi their it takes lots of time, motivation, hard work. This is small
            appreciate from the Day Book Community"
      />
      <Layout>
        <h1
          css={css`
            text-align: center;
          `}
        >
          Congratulations
          <span role="img" aria-label="party buster">
            🎉
          </span>
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
        </div>
        <div>
          <p>
            Hi their it takes lots of time, motivation, hard work. This is small
            appreciate from the <b>Day Book Community</b>
          </p>
        </div>
        <div className="container text-center">
          <blockquote className="quote-box">
            <p className="quotation-mark">“</p>
            <p className="quote-text">
              No thief, however skillful, can rob one of knowledge, and that is
              why knowledge is the best and safest treasure to acquire.
            </p>
            <hr />
            <p className="blog-post-bottom pull-left">L. Frank Baum</p>
          </blockquote>
        </div>
      </Layout>
    </>
  );
};
export default Honour;
