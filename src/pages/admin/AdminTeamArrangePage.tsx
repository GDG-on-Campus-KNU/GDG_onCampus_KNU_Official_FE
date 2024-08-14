import CreateTeamToken from '@gdsc/pages/admin/components/team/CreateTeamToken';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';

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
