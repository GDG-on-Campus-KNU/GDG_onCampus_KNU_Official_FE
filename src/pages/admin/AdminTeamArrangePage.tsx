import { lazy } from 'react';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';

const CreateTeamToken = lazy(
  () => import('@gdsc/pages/admin/components/team/CreateTeamToken')
);

const AdminTeamArrangePage = () => {
  return (
    <DisplayLayout>
      <TokenContainer>
        <CreateTeamToken />
      </TokenContainer>
    </DisplayLayout>
  );
};

export default AdminTeamArrangePage;

const TokenContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: left;
`;
