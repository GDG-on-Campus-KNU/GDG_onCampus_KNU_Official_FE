import styled from '@emotion/styled';
import { DisplayLayout } from '@gdg/styles/LayoutStyle';
import { lazy } from 'react';

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
