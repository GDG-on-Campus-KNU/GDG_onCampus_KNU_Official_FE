import CommonBtn from '@gdsc/components/common/button/CommonBtn';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import { ButtonContainer, TopContainer } from './AdminSetStatePage.style';
import AdminSearchBar from './components/AdminSearchBar';
import MemberTable from './components/MemberTable';

const AdminSetStatePage = () => {
  return (
    <DisplayLayout>
      <TopContainer>
        <ButtonContainer>
          <CommonBtn
            type='button'
            size='md'
            width='99px'
            height='43px'
            color='navy'
            backgroundColor='navy'
            hoverColor='navy'
          >
            삭제하기
          </CommonBtn>
          <CommonBtn
            type='button'
            size='md'
            width='99px'
            height='43px'
            color='navy'
            backgroundColor='navy'
            hoverColor='navy'
          >
            승인하기
          </CommonBtn>
        </ButtonContainer>
        <AdminSearchBar />
      </TopContainer>
      <MemberTable />
    </DisplayLayout>
  );
};

export default AdminSetStatePage;
