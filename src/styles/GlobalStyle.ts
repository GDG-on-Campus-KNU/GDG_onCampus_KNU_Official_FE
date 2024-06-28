import { css } from '@emotion/react';

// fontSize 정의
const fontSizeXxl = '2.5rem'; //40px
const fontSizeMxl = '2.25rem'; // 36px
const fontSizeXl = '1.5rem'; // 24px
const fontSizeLg = '1.25rem'; // 20px
const fontSizeMd = '1rem'; // 16px
const fontSizeSm = '0.875rem'; // 14px
const fontSizeXs = '0.75rem'; // 12px

const sizeXxl = '2.5rem'; //40px
const sizeMxl = '2.25rem'; // 36px
const sizeXl = '1.5rem'; // 24px
const sizeLg = '1.25rem'; // 20px
const sizeMd = '1rem'; // 16px
const sizeSm = '0.875rem'; // 14px
const sizeXs = '0.75rem'; // 12px

//color 정의
const colorAbony = '#1A122B';
const colorHalti = '#1E0E3B';
const colorRevolver = '#1F1632';
const colorMartiniqueApp = '#403755';
const colorMartinique = '#392f4f';
const colorMartiniNavy = '#2D294A';
const colorDarkPurple = '#4F416C';
const colorSelectiveYellow = '#FBBC05';
const colorWhite = '#FFFFFF';
const colorBlack = '#000000';
const colorAlto = '#d9d9d9';
const colorDoveGray = '#979ca4';
const colorSantasGray = '#9D9AA5';
const colorCornflowerBlue = '#4285F4';
const colorCinnabar = '#FF0000';
const colorTransParent = 'rgba(255, 255, 255, 0.8)';
const colorGradient = 'linear-gradient(to top, #1f1632 0%, #392f4f 100%)';

export const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wdth,wght@0,62.5..100,100..900;1,62.5..100,100..900&display=swap');

  :root {
    --font-size-xxl: ${fontSizeXxl};
    --font-size-mxl: ${fontSizeMxl};
    --font-size-xl: ${fontSizeXl};
    --font-size-lg: ${fontSizeLg};
    --font-size-md: ${fontSizeMd};
    --font-size-sm: ${fontSizeSm};
    --font-size-xs: ${fontSizeXs};

    --size-xxl: ${sizeXxl};
    --size-mxl: ${sizeMxl};
    --size-xl: ${sizeXl};
    --size-lg: ${sizeLg};
    --size-md: ${sizeMd};
    --size-sm: ${sizeSm};
    --size-xs: ${sizeXs};

    --color-transparent: ${colorTransParent};
    --color-white: ${colorWhite};
    --color-black: ${colorBlack};
    --color-halti: ${colorHalti};
    --color-abony: ${colorAbony};
    --color-revolver: ${colorRevolver};
    --color-app: ${colorMartiniqueApp};
    --color-que: ${colorMartinique};
    --color-navy: ${colorMartiniNavy};
    --color-selective: ${colorSelectiveYellow};
    --color-dpuprle: ${colorDarkPurple};
    --color-alto: ${colorAlto};
    --color-dove: ${colorDoveGray};
    --color-santas: ${colorSantasGray};
    --color-blue: ${colorCornflowerBlue};
    --color-cinarbar: ${colorCinnabar};
    --color-gradient: ${colorGradient};
  }

  body {
    margin: 0;
    padding: 0;
    width: auto;
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
    font-family: 'Noto+Sans', monospace;
    background-color: var(--color-revolver);
    color: var(--color-white);
  }

  img {
    display: block;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #1f1632;
  }
`;
