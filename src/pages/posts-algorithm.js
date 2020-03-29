import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-list-post-algorithms';
import PostPreview from '../components/post-preview-list';
import ReadLink from '../components/read-link';
import HeroPost from '../components/hero-post';
import Footer from '../components/footer';
export default () => {
  const posts = usePosts();
  return (
    <>
      <HeroPost
        heading="The Performance That Matters"
        headingImage="algorithm-list.png"
      />
      <Layout>
        <h1>algorithms</h1>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <ReadLink to="/">⇦ back to all posts</ReadLink>
        <Footer />
      </Layout>
    </>
  );
};
