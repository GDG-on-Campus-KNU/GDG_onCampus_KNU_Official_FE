import { lazy } from 'react';

import { AsyncBoundary } from '@gdsc/components/common/AsyncBoundary';
import { LoadingView } from '@gdsc/components/common/View/LoadingView';

// import CreateTeamToken from '@gdsc/pages/admin/components/team/CreateTeamToken';
import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';

const CreateTeamToken = lazy(
  () => import('@gdsc/pages/admin/components/team/CreateTeamToken')
);

const AdminTeamArrangePage = () => {
  return (
    <AsyncBoundary
      pendingFallback={<LoadingView />}
      rejectedFallback={<div>에러 페이지</div>}
    >
      <DisplayLayout>
        <TokenContainer>
          <CreateTeamToken />
        </TokenContainer>
      </DisplayLayout>
    </AsyncBoundary>
  );
};

export default AdminTeamArrangePage;

const TokenContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: left;
`;
