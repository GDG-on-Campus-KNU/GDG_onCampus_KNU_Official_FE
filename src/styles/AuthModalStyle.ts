import styled from '@emotion/styled';
import { displayCenter } from '@gdsc/styles/LayoutStyle';

export const AuthWrapper = styled.section`
  ${displayCenter}
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const AuthBox = styled.div`
  width: 60%;

  padding: 35px;

  ${displayCenter}
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

  background-color: var(--color-white);
  opacity: 80%;

  border-radius: 12px;
  box-shadow: 4px 4px 10px var(--color-french);

  z-index: 1000;
`;
