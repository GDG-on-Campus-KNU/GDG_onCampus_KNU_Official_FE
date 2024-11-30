import styled from '@emotion/styled';

import Text from '@gdg/components/common/typography/Text';
import Title from '@gdg/components/common/typography/Title';

export const ApplyLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleLayout = styled.div`
  margin-bottom: 24.12px;
  margin-top: 50px;

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 60px;
  }
`;

export const MainTitle = styled(Title)`
  font-size: var(--font-size-xxl);
  font-weight: 700;

  z-index: 1;
`;

export const SubTitle = styled(Text)`
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-right: 5px;
  z-index: 1;
`;

export const Explain = styled.span`
  font-size: var(--font-size-sm);
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
`;

export const SubLayout = styled.div`
  display: flex;
`;

export const InquiryText = styled.span`
  text-decoration: underline;
  font-size: var(--font-size-lg);
  font-weight: 700;
  margin-left: 5px;
  cursor: pointer;

  @media (max-width: 500px) {
    font-size: var(--font-size-md);
  }
`;

export const InquiryLayout = styled.div`
  width: 100%;

  display: flex;
  justify-content: right;
  align-items: center;
  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`;
