import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
const PostPreview = ({ post }) => (
  <div
    css={css`
      background: #ffffff;
      color: #444857;
      border-radius: 10px;
      margin: 0.5rem;
      padding: 1rem;
      &:hover {
        box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
      }
    `}
  >
    <Link
      to={post.slug}
      css={css`
        color: #444857;
        text-decoration: none !important;
      `}
    >
      <Image
        css={css`
          * {
            margin-top: 0;
            margin-bottom: -18;
            padding: 0.5rem;
          }
        `}
        fixed={post.image.sharp.fixed}
        alt={post.title}
      />
      <p
        css={css`
          margin-top: 0;
        `}
      >
        {post.title}
      </p>
    </Link>
  </div>
);

export default PostPreview;
