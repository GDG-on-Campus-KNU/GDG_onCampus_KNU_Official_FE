import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';

const ApplyLayout = styled(DisplayLayout)`
  height: calc(100vh - 45px);
  display: flex;
  justify-content: center;
`;

const ApplyPage = () => {
  return <ApplyLayout>123</ApplyLayout>;
};

export default ApplyPage;
