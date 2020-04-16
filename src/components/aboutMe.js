import React from 'react';
import { TiFlash } from 'react-icons/ti';
import { css } from '@emotion/core';
import fetchImage from '../hooks/image';
import Image from 'gatsby-image';
const AboutMe = () => {
  const image = fetchImage('me.jpg');
  return (
    <section className="site-about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h3>About Me .</h3>
            <p>
              Hello! I'm Pranav, a software engineer by passion, love solving
              problem which requires thinking in terms of dynamic programing and
              <a
                target="_blank"
                style={{ margin: '10px', color: '#1ba94c ' }}
                rel="noopener noreferrer"
                href="https://www.hackerrank.com/pranavp_"
              >
                hakerRank
              </a>
              problems and many more
            </p>
            <p>
              Most loved thing in js is the closer property, figuring out life
              purpose
            </p>
            <p>Here are a few technologies I've been working with recently</p>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <ul className="list-unstyled">
                  <li>
                    <TiFlash style={{ color: '#444857' }} />
                    java Script (ES6+)
                  </li>
                  <li>
                    <TiFlash style={{ color: '#444857' }} />
                    Php
                  </li>
                  <li>
                    <TiFlash style={{ color: '#444857' }} />
                    React (Native)
                  </li>
                  <li>
                    <TiFlash style={{ color: '#444857' }} />
                    Gatsby
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-12">
                <ul className="list-unstyled">
                  <li>
                    <TiFlash style={{ color: '#444857' }} />
                    My Sql (DataBase)
                  </li>

                  <li>
                    <TiFlash style={{ color: '#444857' }} />
                    Node js
                  </li>
                  <li>
                    <TiFlash style={{ color: '#444857' }} />
                    GraphQl (learning)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 text-center vertical-center">
            <Image
              css={css`
                * {
                  margin-top: 0;
                  border-radius: 10%;
                }
              `}
              fluid={image.node.childImageSharp.fluid}
              alt="Pranav"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
