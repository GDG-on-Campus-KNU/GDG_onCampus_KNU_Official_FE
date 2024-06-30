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
  height: 360px;
  padding: 35px;

  ${displayCenter}
  flex-direction: column;
  align-items: center;
  gap: 35px;

  background-color: ${(props) => {
    switch (props.color) {
      case 'navy':
        return 'var(--color-navy)';
      case 'white':
        return 'rgba(255,255,255,0.15)';
    }
  }};

  border-radius: 12px;
`;
