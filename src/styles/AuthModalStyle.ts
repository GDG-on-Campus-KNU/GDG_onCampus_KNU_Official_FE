import styled from '@emotion/styled';
import { displayCenter } from '@gdg/styles/LayoutStyle';

export const AuthWrapper = styled.section`
  ${displayCenter}
  align-items: center;
  height: calc(100vh - 45px);
  width: 100%;
`;

export const AuthBox = styled.div<{
  variant?: 'primary' | 'transparent' | 'warning';
}>`
  width: 60%;
  min-width: 296px;
  height: 360px;
  padding: 35px;

  ${displayCenter}
  flex-direction: column;
  align-items: center;
  gap: 35px;

  background-color: ${(props) => {
    switch (props.variant) {
      case 'primary':
        return 'rgba(255,255,255,0.15)';
      case 'transparent':
        return 'rgba(255,255,255,0.15)';
      case 'warning':
        return 'var(--color-white)';
    }
  }};

  @media (max-width: 500px) {
    background-color: ${(props) => {
      switch (props.variant) {
        case 'primary':
          return 'rgba(255,255,255,0.15)';
        case 'transparent':
          return 'transparent';
        case 'warning':
          return 'var(--color-white)';
      }
    }};
  }

  border-radius: 12px;
`;

export const AuthForm = styled.form`
  width: 60%;
  @media (max-width: 500px) {
    width: 80%;
  }
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

  @media (max-width: 500px) {
    background-color: ${(props) => {
      switch (props.color) {
        case 'navy':
          return 'transparent';
        case 'white':
          return 'rgba(255,255,255,0.15)';
      }
    }};
  }

  border-radius: 12px;
`;
