import styled from '@emotion/styled';

export const displayCenter = `
    display: flex;
    justify-content: center;
`;

export const DisplayLayout = styled.div`
  width: calc(100% - 124px);
  max-width: 1024px;
  padding: 0 62px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    width: calc(100% - 64px);
    padding: 0px 32px;
  }
`;
