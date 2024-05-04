import { css } from '@emotion/react';

// fontSize 정의
const fontSizeXxl = '2.5rem'; //40px
const fontSizeXl = '1.5rem'; // 24px
const fontSizeLg = '1.25rem'; // 20px
const fontSizeMd = '1rem'; // 16px
const fontSizeSm = '0.875rem'; // 14px
const fontSizeXs = '0.75rem'; // 12px

//color 정의
const colorHalti = '#1E0E3B';
const colorRevolver = '#1F1632';
const colorPortGore = '#271C3E';
const colorMartinique = '#392f4f';
const colorMartiniNavy = '#2D294A';
const colorSelectiveYellow = '#FBBC05';
const colorWhite = '#FFFFFF';
const colorBlack = '#000000';
const colorFrenchGray = '#BDBBC2';
const colorDoveGray = '#636363';
const colorCornflowerBlue = '#4285F4';
const colorCinnabar = '#EA4335';
const colorTransParent = 'rgba(255, 255, 255, 0.8)';

export const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&display=swap');

  :root {
    --font-size-xxl: ${fontSizeXxl};
    --font-size-xl: ${fontSizeXl};
    --font-size-lg: ${fontSizeLg};
    --font-size-md: ${fontSizeMd};
    --font-size-sm: ${fontSizeSm};
    --font-size-xs: ${fontSizeXs};

    --color-transparent: ${colorTransParent};
    --color-white: ${colorWhite};
    --color-black: ${colorBlack};
    --color-halti: ${colorHalti};
    --color-revolver: ${colorRevolver};
    --color-gore: ${colorPortGore};
    --color-que: ${colorMartinique};
    --color-navy: ${colorMartiniNavy};
    --color-selective: ${colorSelectiveYellow};
    --color-french: ${colorFrenchGray};
    --color-dove: ${colorDoveGray};
    --color-blue: ${colorCornflowerBlue};
    --color-cinarbar: ${colorCinnabar};
  }

  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Noto+Sans', monospace;
  }

  img {
    display: block;
  }
`;
