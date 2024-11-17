import { Spinner } from '../Spinner';
import styled from '@emotion/styled';

export const LoadingView = () => (
  <SpinnerWrapper>
    <Spinner />
  </SpinnerWrapper>
);
const SpinnerWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 45px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 16px;

  @media (min-width: 500px) {
    height: calc(100vh - 47px);
  }
`;
