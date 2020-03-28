import React from 'react';
import { css } from '@emotion/core';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
const Icon = ({ iconName }) => {
  if (iconName === 'Linkedin') {
    return (
      <a
        target="_blank"
        css={css`
          margin: 1rem;
          &:hover {
            color: #2867b2;
          }
        `}
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/pranav-p-241914183"
      >
        <FaLinkedin size={30} />
      </a>
    );
  } else if (iconName === 'Instagram') {
    return (
      <a
        target="_blank"
        css={css`
          margin: 1rem;
          &:hover {
            color: #c13584;
          }
        `}
        rel="noopener noreferrer"
        href="https://www.instagram.com/_fangs._/"
      >
        <FaInstagram size={30} />
      </a>
    );
  } else if (iconName === 'Github') {
    return (
      <a
        target="_blank"
        css={css`
          margin: 1rem;
          &:hover {
            color: #000000;
          }
        `}
        rel="noopener noreferrer"
        href="https://github.com/pranavp10"
      >
        <FaGithub size={30} />
      </a>
    );
  } else if (iconName === 'Twitter') {
    return (
      <a
        target="_blank"
        css={css`
          margin: 1rem;
          &:hover {
            color: #00acee;
          }
        `}
        rel="noopener noreferrer"
        href="https://twitter.com/ThatsPranav"
      >
        <FaTwitter size={30} />
      </a>
    );
  } else if (iconName === 'Mail') {
    return (
      <a
        target="_blank"
        css={css`
          margin: 1rem;
          &:hover {
            color: #d44638;
          }
        `}
        rel="noopener noreferrer"
        href="mailto:pranavkp.me@outlook.com"
      >
        <MdEmail size={30} />
      </a>
    );
  }
};

export default Icon;
