import { css } from '@emotion/react';

// fontSize 정의
const fontSizeXxl = '2.5rem'; //40px
const fontSizeXl = '1.5rem'; // 24px
const fontSizeLg = '1.25rem'; // 20px
const fontSizeMd = '1rem'; // 16px
const fontSizeSm = '0.875rem'; // 14px
const fontSizeXs = '0.75rem'; // 12px

//color 정의
const colorRevolver = '#1F1632';
const colorPortGore = '#271C3E';
const colorMartinique = '#2A2545';
const colorMartiniNavy = '#2D294A';
const colorSelectiveYellow = '#FBBC05';
const colorWhite = '#FFFFFF';
const colorBlack = '#000000';
const colorFrenchGray = '#BDBBC2';
const colorDoveGray = '#636363';
const colorCornflowerBlue = '#4285F4';

export const GlobalStyle = css`
  :root {
    --font-size-xxl: ${fontSizeXxl};
    --font-size-xl: ${fontSizeXl};
    --font-size-lg: ${fontSizeLg};
    --font-size-md: ${fontSizeMd};
    --font-size-sm: ${fontSizeSm};
    --font-size-xs: ${fontSizeXs};

    --color-white: ${colorWhite};
    --color-black: ${colorBlack};
    --color-revolver: ${colorRevolver};
    --color-gore: ${colorPortGore};
    --color-que: ${colorMartinique};
    --color-navy: ${colorMartiniNavy};
    --color-selective: ${colorSelectiveYellow};
    --color-french: ${colorFrenchGray};
    --color-dove: ${colorDoveGray};
    --color-blue: ${colorCornflowerBlue};
  }
`;
