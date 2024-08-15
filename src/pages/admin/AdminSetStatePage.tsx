import { useState } from 'react';

import CommonBtn from '@gdsc/components/common/button/CommonBtn';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import { ButtonContainer, TopContainer } from './AdminSetStatePage.style';
import AdminSearchBar from './components/AdminSearchBar';
import ApproveModal from './components/status/ApproveModal';
import DeleteModal from './components/status/DeleteModal';
import MemberTable from './components/status/MemberTable';

const AdminSetStatePage = () => {
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [approveModalOpen, setApproveModalOpen] = useState<boolean>(false);

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleApproveClick = () => {
    setApproveModalOpen(true);
  };

  const handleCloseApproveModal = () => {
    setApproveModalOpen(false);
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
            hoverColor='blue'
            onClick={handleApproveClick}
          >
            승인하기
          </CommonBtn>
        </ButtonContainer>
        <AdminSearchBar />
      </TopContainer>
      <MemberTable />
      {deleteModalOpen && <DeleteModal onClose={handleCloseDeleteModal} />}
      {approveModalOpen && <ApproveModal onClose={handleCloseApproveModal} />}
    </DisplayLayout>
  );
};

export default AdminSetStatePage;
