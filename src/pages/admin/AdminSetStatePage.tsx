import { useState } from 'react';

import CommonBtn from '@gdsc/components/common/button/CommonBtn';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import { ButtonContainer, TopContainer } from './AdminSetStatePage.style';
import AdminSearchBar from './components/AdminSearchBar';
import DeleteModal from './components/DeleteModal';
import MemberTable from './components/MemberTable';

const AdminSetStatePage = () => {
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseModal = () => {
    setDeleteModalOpen(false);
  };

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
            onClick={handleDeleteClick}
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
      {deleteModalOpen && <DeleteModal onClose={handleCloseModal} />}
    </DisplayLayout>
  );
};

export default AdminSetStatePage;
