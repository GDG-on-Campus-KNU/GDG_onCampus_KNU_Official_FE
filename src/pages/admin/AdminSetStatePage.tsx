import CommonBtn from '@gdsc/components/common/button/CommonBtn';

import { useGetUserList } from '@gdsc/apis/hooks/admin/useGetUserList';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import { ButtonContainer, TopContainer } from './AdminSetStatePage.style';
import AdminSearchBar from './components/AdminSearchBar';
import MemberTable from './components/MemberTable';

const AdminSetStatePage = () => {
  const { data } = useGetUserList(1, 7);
  console.log(data);

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
            hoverColor='red'
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
