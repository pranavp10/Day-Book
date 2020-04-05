import React from 'react';
import { Global, css } from '@emotion/core';
import Header from './header';
const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
          /* More info: https://bit.ly/2PsCnzk */
          * + * {
            margin-top: 1rem;
          }
          html,
          body {
            margin: 0;
            color: #444857;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            font-size: 18px;
            line-height: 1.4;

            /* remove margin for the main div that Gatsby mounts into */
            > div {
              margin-top: 0;
            }
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #444857;
            line-height: 1.1;
            + * {
              margin-top: 0.5rem;
            }
          }
          strong {
            color: #444857;
          }
          li {
            margin-top: 0.25rem;
          }
          a {
            color: #444857;
          }
          pre {
            background-color: #f6f6f6;
            border-radius: 10px;
            padding: 30px;
          }
        `}
      />
      <Header />
      <main
        css={css`
          margin: 2rem auto;
          max-width: 550px;
          @media (min-width: 900px) {
            max-width: 850px;
          }
          @media (max-width: 450px) {
            max-width: 318px;
          }
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
