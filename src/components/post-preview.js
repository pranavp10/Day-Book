import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import ReadLink from '../components/read-link';
import Image from 'gatsby-image';
const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      background: #eee;
      color: #444857;
      display: flex;
      margin-top: 0;
      padding-bottom: 1rem;
      border-radius: 10px;
      padding: 1.5rem 1.5rem 2rem;
      margin: 2rem 0;
      :first-of-type {
        margin-top: 1rem;
      }
      &:hover {
        box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
      }
    `}
  >
    <Link
      to={post.slug}
      css={css`
        margin: 1rem 1rem 0 0;
        width: 100px;
      `}
    >
      <Image
        css={css`
          * {
            margin-top: 0;
          }
        `}
        fluid={post.image.sharp.fluid}
        alt={post.title}
      />
    </Link>
    <div>
      <h3>
        <Link
          to={post.slug}
          css={css`
            color: #444857;
            text-decoration: none !important;
          `}
        >
          {post.title}
        </Link>
      </h3>
      <p>{post.description}</p>
      <ReadLink to={post.slug}>Read More ➩</ReadLink>
    </div>
  </article>
);

export default PostPreview;
