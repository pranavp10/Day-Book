import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import Footer from '../components/footer';
import SEO from '../components/seo';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { getRandomColor } from '../utils';
export default () => {
  const {
    tag: { group },
  } = useStaticQuery(graphql`
    query {
      tag: allMdx {
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
      }
    }
  `);

  return (
    <>
      <SEO description="tags" lang="en" title="Tags" />
      <Layout>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          `}
        >
          {group.map(tag => {
            return (
              <li
                key={tag.tag}
                css={css`
                  list-style-type: none;
                `}
              >
                <Link to={`tags/${tag.tag}`}>
                  <p
                    css={css`
                      background: #eee;
                      margin: 10px;
                      padding: 15px;
                      border-radius: 30px;
                      padding-left: 0;
                      &:hover {
                        background: #e5e5e5;
                        color: #454545;
                      }
                    `}
                  >
                    <span
                      css={css`
                        background: ${getRandomColor()};
                        color: #fff;
                        padding: 15px;
                        border-radius: 50%;
                      `}
                    >
                      #
                    </span>{' '}
                    {tag.tag}
                  </p>
                </Link>
              </li>
            );
          })}
        </div>
        <Footer />
      </Layout>
    </>
  );
};
