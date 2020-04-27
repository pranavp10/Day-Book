import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Image from 'gatsby-image';
import Helmet from 'react-helmet';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import useImage from '../hooks/imageFixed';
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        section
        nextPost
        previousPost
        image {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post }, pageContext }) => {
  const imageData = useImage('me.jpg');
  var date = post.frontmatter.date;
  date = date
    .split('-')
    .reverse()
    .join('-');
  const d = new Date(date);
  const dtf = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year },
  ] = dtf.formatToParts(d);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{`Day Book | ${post.frontmatter.title}`}</title>
        <meta name="description" content={post.frontmatter.title} />
      </Helmet>
      <Layout>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap-reverse;
          `}
        >
          <h1>
            {post.frontmatter.title}
            <br />
            <div
              css={css`
                display: flex;
              `}
            >
              <Link to="./about/">
                <Image
                  css={css`
                    * {
                      margin-top: 0;
                      border-radius: 50%;
                      padding: 5px;
                    }
                  `}
                  fixed={imageData.node.childImageSharp.fixed}
                  alt="Pranav"
                />
              </Link>
              <p
                css={css`
                  font-size: 0.75rem;
                `}
              >
                <b>
                  {`${month} ${day} ,${year}`} /{' '}
                  <a
                    target="_blank"
                    css={css`
                      &:hover {
                        color: #000000;
                      }
                    `}
                    rel="noopener noreferrer"
                    href={`https://github.com/pranavp10/Day-Book/blob/master/${pageContext.slug}/${pageContext.section}`}
                  >
                    Edit{' '}
                    <span role="img" aria-label="edit">
                      ✏️
                    </span>
                  </a>
                </b>
              </p>
            </div>
          </h1>
          <Image
            css={css`
              * {
                margin-top: 0;
                padding: 10px;
              }
            `}
            fixed={post.frontmatter.image.childImageSharp.fixed}
            alt=""
          />
        </div>

        <MDXRenderer>{post.body}</MDXRenderer>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          {post.frontmatter.previousPost ? (
            <ReadLink
              to={`/${post.frontmatter.section}/${post.frontmatter.previousPost}`}
            >
              ⇦ Previous
            </ReadLink>
          ) : (
            <ReadLink to={post.frontmatter.section}>⇦ Previous</ReadLink>
          )}
          {post.frontmatter.nextPost ? (
            <ReadLink
              to={`/${post.frontmatter.section}/${post.frontmatter.nextPost}`}
            >
              Next ➩
            </ReadLink>
          ) : null}
        </div>
      </Layout>
    </>
  );
};

export default PostTemplate;
