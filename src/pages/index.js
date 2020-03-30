import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero-index';
import usePosts from '../hooks/use-list-post';
import PostPreview from '../components/post-preview';
import Helmet from 'react-helmet';
import useStaticQuery from '../hooks/use-sitemetadata';
import Footer from '../components/footer';
export default () => {
  const posts = usePosts();
  const { title, description } = useStaticQuery();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Hero />
      <Layout>
        <h1>Read Blogs On</h1>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Footer />
      </Layout>
    </>
  );
};
