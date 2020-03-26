import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-list-post-react';
import PostPreview from '../components/post-preview-list';
import ReadLink from '../components/read-link';

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>React</h1>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
      <ReadLink to="/">⇦ back to all posts</ReadLink>
    </Layout>
  );
};
