import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import DisplayNextPrev from '../components/displayNextPrev';
import useImage from '../hooks/imageFixed';
import SEO from '../components/seo';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        section
        tags
        image {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      body
      excerpt
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;

const PostTemplate = ({ data: { mdx: post }, pageContext }) => {
  const imageData = useImage('me.jpg');
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={`Day Book | ${post.excerpt}`}
      />
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
                margin: 0;
                display: flex;
                align-items: center;
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
                  margin: 0;
                `}
              >
                {post.fields.readingTime.text} / {post.frontmatter.date}
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
        <div
          css={css`
            display: flex;
            margin-top: -10px;
            margin-bottom: -10px;
          `}
        >
          {post.frontmatter.tags.map(tag => {
            return (
              <>
                <Link
                  to={`tags/${tag}`}
                  css={css`
                    padding: 0.3rem 0.5rem;
                    background: #f2f2f2;
                    border-radius: 6px;
                    color: #5f5f5f;
                    font-size: 0.8rem;
                    font-weight: 400;
                    margin: 0 0.5rem 0.5rem 0;
                    &:hover {
                      background: #e5e5e5;
                      color: #454545;
                    }
                  `}
                >
                  {tag}
                </Link>
              </>
            );
          })}
        </div>
        <hr />
        <MDXRenderer>{post.body}</MDXRenderer>
        <a
          target="_blank"
          css={css`
            padding: 0.3rem 0.5rem;
            background: #f2f2f2;
            border-radius: 6px;
            color: #5f5f5f;
            font-size: 0.8rem;
            font-weight: 400;
            margin: 0 0.5rem 0.5rem 0;
            &:hover {
              background: #e5e5e5;
              color: #454545;
            }
          `}
          rel="noopener noreferrer"
          href={`https://github.com/pranavp10/Day-Book/blob/master/${pageContext.section}/${pageContext.slug}.mdx`}
        >
          <span
            role="img"
            aria-label="edit"
            css={css`
              font-size: 0.85rem;
            `}
          >
            ✏️
          </span>{' '}
          Edit this page on GitHub
        </a>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          `}
        >
          {pageContext.prev === null ? (
            <DisplayNextPrev to={`/${pageContext.section}`}>
              <p style={{ color: '#BDBDBD', margin: 0 }}>PREVIOUS</p>
              List Of{' '}
              {pageContext.section.charAt(0).toUpperCase() +
                pageContext.section.slice(1)}
            </DisplayNextPrev>
          ) : (
            <DisplayNextPrev
              to={`/${pageContext.prev.section}/${pageContext.prev.slug}`}
            >
              <p style={{ color: '#BDBDBD', margin: 0 }}>PREVIOUS</p>
              {pageContext.prev.title}
            </DisplayNextPrev>
          )}
          {pageContext.next === null ? (
            <DisplayNextPrev to="/honour">
              <p style={{ color: '#BDBDBD', textAlign: 'right', margin: 0 }}>
                NEXT
              </p>
              Honour 🏆
            </DisplayNextPrev>
          ) : (
            <DisplayNextPrev
              to={`/${pageContext.next.section}/${pageContext.next.slug}`}
            >
              <p style={{ color: '#BDBDBD', textAlign: 'right', margin: 0 }}>
                NEXT
              </p>
              {pageContext.next.title}
            </DisplayNextPrev>
          )}
        </div>
      </Layout>
    </>
  );
};

export default PostTemplate;
