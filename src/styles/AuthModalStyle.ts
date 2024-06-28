import { displayCenter } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';

export const AuthWrapper = styled.section`
  ${displayCenter}
  align-items: center;
  height: calc(100vh - 45px);
  width: 100%;
`;

export const AuthBox = styled.div`
  width: 60%;
  padding: 35px;
  flex-direction: row;

  ${displayCenter}
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  background-color: var(--color-transparent);

  border-radius: 12px;
  box-shadow: 4px 4px 10px var(--color-french);
`;
