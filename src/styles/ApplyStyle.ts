import Text from '@gdsc/components/typography/Text';
import Title from '@gdsc/components/typography/Title';

import styled from '@emotion/styled';

export const ApplyLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleLayout = styled.div`
  margin-bottom: 44.12px;

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 80px;
  }
`;

export const MainTitle = styled(Title)`
  font-size: var(--font-size-xxl);
  font-weight: 700;
`;

export const SubTitle = styled(Text)`
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-right: 5px;
`;

export const Explain = styled.span`
  font-size: var(--font-size-sm);
  font-weight: 300;
`;

export const SubLayout = styled.div`
  margin-bottom: 10px;
`;
