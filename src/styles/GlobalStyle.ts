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
const colorCinnabar = '#EA4335';
const colorSilverGray = '#b2b2b2';
const colorDenimBlue = '#2e5dab';
const colorBattleshipGray = '#6a6d73';
const colorPlatinumGray = '#989898';
const colorFireBrick = '#a42f25';
const colorGoldenRod = '#b08404';
const colorMidnightBlue = '#1f1a2c';
const colorSunsetRed = '#ea4335';
const colorGrayishPurple = '#645f78';
const colorSmokyGray = '#807c8f';
const colorLavendarGray = '#b9b7c0';
const colorTransParent = 'rgba(255, 255, 255, 0.8)';
const colorMoreTransParent = 'rgba(255, 255, 255, 0.15)';
const colorGradient = 'linear-gradient(to top, #1f1632 0%, #392f4f 100%)';

export const GlobalStyle = css`
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
    --color-dpurple: ${colorDarkPurple};
    --color-alto: ${colorAlto};
    --color-dove: ${colorDoveGray};
    --color-santas: ${colorSantasGray};
    --color-blue: ${colorCornflowerBlue};
    --color-cinarbar: ${colorCinnabar};
    --color-silver: ${colorSilverGray};
    --color-denim: ${colorDenimBlue};
    --color-battleship: ${colorBattleshipGray};
    --color-platinum: ${colorPlatinumGray};
    --color-brick: ${colorFireBrick};
    --color-golden: ${colorGoldenRod};
    --color-midnight: ${colorMidnightBlue};
    --color-red: ${colorSunsetRed};
    --color-gradient: ${colorGradient};
    --color-grayish: ${colorGrayishPurple};
    --color-smoky: ${colorSmokyGray};
    --color-lavendar: ${colorLavendarGray};
    --color-more-transparent: ${colorMoreTransParent};
  }

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */

  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    display: flex;
    -ms-overflow-style: none;
    scrollbar-width: none;
    flex-direction: column;
    font-family: 'Noto Sans KR', sans-serif;
    font-optical-sizing: auto;
    background-color: var(--color-revolver);
    color: var(--color-white);
    line-height: 1.4;
  }

  img {
    display: block;
  }

  a {
    text-decoration: none;
    color: var(--color-white);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #1f1632;
  }
`;
