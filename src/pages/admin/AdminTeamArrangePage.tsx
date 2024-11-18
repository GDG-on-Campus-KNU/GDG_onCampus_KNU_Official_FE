import styled from '@emotion/styled';
import { lazy } from 'react';

import { DisplayLayout } from '@gdg/styles/LayoutStyle';

const CreateTeamToken = lazy(
  () => import('@gdg/pages/admin/components/team/CreateTeamToken')
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
