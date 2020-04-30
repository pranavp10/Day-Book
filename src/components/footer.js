import React from 'react';
import { css } from '@emotion/core';
import Icon from './icon';
const FooterLink = () => {
  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          flex-direction: row-reverse;
          @media (max-width: 500px) {
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
          }
        `}
      >
        <div>
          <Icon iconName="Linkedin" />
          <Icon iconName="Github" />
          <Icon iconName="Twitter" />
          <Icon iconName="Mail" />
        </div>
        <p
          css={css`
            @media (max-width: 500px) {
              padding: 10px;
            }
          `}
        >
          © 2020, Built with Gatsby
        </p>
      </div>
    </>
  );
};

export default FooterLink;
