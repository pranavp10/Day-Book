import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import Hero from '../components/hero-index';
import usePosts from '../hooks/use-list-post';
import PostPreview from '../components/post-preview';
import AboutMeFooter from '../components/aboutMeFooter';
import Footer from '../components/footer';
import SEO from '../components/seo';
export default () => {
  const posts = usePosts();
  return (
    <>
      <SEO />
      <Hero />
      <Layout>
        <div
          css={css`
            width: auto;
            border-bottom: 1px solid #ddd;
            background: #eee;
            color: #444857;
            margin-top: 0;
            border-radius: 10px;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 0.5rem;
          `}
        >
          <h1> What you want to learn</h1>
          <article
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              flex-wrap: wrap;
            `}
          >
            {posts.map(post => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </article>
        </div>
        <hr />
        <AboutMeFooter />
        <hr />
        <Footer />
      </Layout>
    </>
  );
};
