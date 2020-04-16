import React from 'react';
import CodingGif from './coding.gif';
const Banner = () => (
  <section className="site-banner">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 site-title">
          <p className="myName">Hi, my name is</p>
          <h1 className="title-text text-uppercase">Pranav Patel</h1>
          <h4>Not an ordinary Software Engineer</h4>
          <p>
            I'm a software engineer from India, specializing in building Full
            Stack and Progressive web app.
          </p>
          <div className="site-buttons">
            <div className="d-flex flex-row flex-wrap">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-secondary"
                href="mailto:pranavkp.me@outlook.com"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 banner-image">
          <CodingGif />
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
