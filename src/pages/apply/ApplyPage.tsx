import ApplyNav from '@gdsc/pages/apply/components/ApplyNav';
import Star from '@gdsc/pages/main/components/Star';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';

const ApplyLayout = styled(DisplayLayout)`
  height: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ApplyPage = () => {
  return (
    <ApplyLayout>
      <ApplyNav />
      {[...Array(25)].map((_, index) => (
        <Star
          key={index}
          top={`${Math.random() * 30}%`}
          left={`${Math.random() * 100}%`}
        />
      ))}
    </ApplyLayout>
  );
};

export default ApplyPage;
