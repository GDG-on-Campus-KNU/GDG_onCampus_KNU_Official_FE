import styled from '@emotion/styled';

export const GDSCText = styled.div`
  color: var(--color-white);
  font-size: var(--font-size-xl);
  font-weight: 700;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const IntroTextStyle = `
  font-size: var(--font-size-md);
  font-weight: 600;
  @media (max-width: 626px) {
    font-size: var(--font-size-xs);
  }
`;

export const IntroText = styled.div`
  color: var(--color-white);
  ${IntroTextStyle}
`;
