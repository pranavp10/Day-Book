import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-list-post-js';
import PostPreview from '../components/post-preview-list';
import ReadLink from '../components/read-link';
import Footer from '../components/footer';
import HeroPost from '../components/hero-post';
export default () => {
  const posts = usePosts();
  return (
    <>
      <HeroPost
        heading="The Browser Language"
        headingImage="javascript-list.png"
      />
      <Layout>
        <h1>javascript</h1>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <ReadLink to="/">⇦ back to all posts</ReadLink>
        <Footer />
      </Layout>
    </>
  );
};
