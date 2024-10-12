import Star from '@gdg/components/feature/star/Star';

import ApplyEx from '@gdg/pages/apply/components/ApplyEx';

import { DisplayLayout } from '@gdg/styles/LayoutStyle';

import styled from '@emotion/styled';
import { ApplyExMetaData } from '@gdg/router/components/MetaData';

const ApplyLayout = styled(DisplayLayout)`
  height: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ApplyExPage = () => {
  return (
    <>
      <ApplyExMetaData />
      <ApplyLayout>
        <ApplyEx />
        {[...Array(25)].map((_, index) => (
          <Star
            key={index}
            top={`${Math.random() * 30}%`}
            left={`${Math.random() * 100}%`}
          />
        ))}
      </ApplyLayout>
    </>
  );
};

export default ApplyExPage;
