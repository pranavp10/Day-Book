import React, { useState } from 'react';
import { css } from '@emotion/core';
const ContactMe = () => {
  const [sent, setSent] = useState(false);
  return (
    <div
      css={css`
        width: auto;
        border-bottom: 1px solid #ddd;
        background: #eee;
        color: #444857;
        margin-top: 0;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 3rem;
        @media (max-width: 450px) {
          padding: 1rem;
        }
      `}
    >
      <p>What's Next?</p>
      <h3>Coffee with me.</h3>
      <p>
        Don't hesitate to reach out to me. I'd love to hear from you. Want me to
        give a talk on react, javascript or algorithm Let's discuss over coffee.
      </p>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        {sent ? (
          <b>
            Will be contacting you soon for{' '}
            <span role="image" aria-label="coffee">
              ☕
            </span>{' '}
            or{' '}
            <span role="image" aria-label="drink">
              🍹
            </span>{' '}
            which you like.
          </b>
        ) : (
          <>
            <div>
              <input
                type="email"
                class="form-control"
                placeholder="Type your email..."
              />
            </div>
            <button type="submit" class="btn btn-secondary ">
              Send
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactMe;
