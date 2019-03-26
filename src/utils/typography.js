import Typography from 'typography';
import DeYoung from 'typography-theme-de-young';

import './global.css';

DeYoung.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  };
};

const typography = new Typography(DeYoung);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export const rhythm = typography.rhythm;
export const scale = typography.scale;
export default typography;
