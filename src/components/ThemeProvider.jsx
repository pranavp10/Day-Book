import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import ThemeContext from './ThemeContext';
import {
  useTheme,
  getTheme,
  CUBIC_BEZIER_TRANSITION,
  BACKGROUND_TRANSITION_TIME,
} from '../utils/theme';
import PRISM_THEME_LIGHT from '../css/prism-theme-light';
import PRISM_THEME_DARK from '../css/prism-theme-dark';

// src/components/ThemeProvider.jsx

const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useTheme();
  const currentTheme = getTheme(theme);
  const darkTheme = getTheme('dark');
  const { color } = currentTheme;
  const [key, forceUpdate] = useState(0);
  useEffect(() => {
    // let react take care of dynamic styles
    forceUpdate(1);
    // after mounting, remove the class from body
    document.body.classList.remove('dark');
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <EmotionThemeProvider theme={currentTheme}>
        <Global
          styles={css({
            html: {
              scrollbarColor:
                theme === 'dark'
                  ? `${darkTheme.muted} ${darkTheme.background}`
                  : 'auto',
            },
            body: {
              backgroundColor: currentTheme.background,
              transitionDelay:
                theme === 'dark' && key === 1
                  ? BACKGROUND_TRANSITION_TIME
                  : '0s',
            },
            'body.dark': {
              '.container': {
                background: darkTheme.background,
                color: darkTheme.color,
              },
              '.muted': {
                color: darkTheme.muted,
              },
            },
          })}
        />
        <Global
          styles={css(theme === 'dark' ? PRISM_THEME_DARK : PRISM_THEME_LIGHT)}
        />
        <Global
          // set prismjs theme to dark for initial load
          styles={css(`
						body.dark {
							${PRISM_THEME_DARK}
						}
					`)}
        />
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: node.isRequired,
};

export default ThemeProvider;
