import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
const tag = ({ post }) => {
  const nextLink = `/${post.section}/${post.slug}`;
  return (
    <Link to={nextLink}>
      <article
        css={css`
          display: grid;
          grid-template-columns: 50px 1fr 0;
          padding: 1rem 0;
          margin: 0;
          border: 1px solid transparent;
          border-bottom-color: #ebebeb;
          :first-of-type {
            margin-top: 1rem;
          }
          &:hover {
            border-radius: 10px;
            background: #f5f5f5;
            box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
            p {
              background: #fff;
              color: #454545;
            }
          }
        `}
      >
        <Image
          css={css`
            * {
              margin-top: 0;
              border-radius: 70%;
            }
            margin-right: 10px;
            position: relative;
            overflow: hidden;
            display: inline-block;
          `}
          fixed={post.image.sharp.fixed}
          alt={post.title}
        />
        <div
          css={css`
            margin-top: 0;
            margin-left: 10px;
          `}
        >
          <h2
            css={css`
              font-size: 1.1rem;
              font-weight: 500;
              line-height: 1.3;
              border-bottom: none;
              margin: 0;
              padding: 0;
            `}
          >{` ${post.title},${post.description}`}</h2>
          <div
            css={css`
              font-size: 1rem;
              display: block;
              color: rgba(0, 0, 0, 0.4);
              font-weight: 400;
              margin-top: 0;
            `}
          >
            {post.date}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default tag;
