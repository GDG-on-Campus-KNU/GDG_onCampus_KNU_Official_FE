import styled from '@emotion/styled';

export const displayCenter = `
    display: flex;
    justify-content: center;
`;

export const PageWrapper = styled.section`
  ${displayCenter}
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;
