import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-list-post-algorithms';
import PostPreview from '../components/post-preview-list';
import ReadLink from '../components/read-link';
import Hero from '../components/hero-index';
export default () => {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        <h1>algorithms</h1>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <ReadLink to="/">⇦ back to all posts</ReadLink>
      </Layout>
    </>
  );
};
