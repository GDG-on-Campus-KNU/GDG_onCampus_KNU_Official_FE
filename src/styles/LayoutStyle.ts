import styled from '@emotion/styled';

export const displayCenter = `
    display: flex;
    justify-content: center;
`;

export const DisplayLayout = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  margin: 0 62px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    margin: 0px 32px;
  }
`;
