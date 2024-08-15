import { useEffect, useState, lazy } from 'react';

import CommonBtn from '@gdsc/components/common/button/CommonBtn';

import PlusBtn from '@gdsc/assets/admin/plusBtn.svg';
import close from '@gdsc/assets/admin/remove.svg';

import { deleteParentTeam } from '@gdsc/apis/hooks/admin/deleteParentTeam';
import { putTeamMember } from '@gdsc/apis/hooks/admin/putTeamMember';
import { useGetAllTeamToken } from '@gdsc/apis/hooks/admin/useGetAllTeamToken';
import type { Team } from '@gdsc/apis/hooks/admin/useGetAllTeamToken';

import {
  BtnWrapper,
  PlusBtnImg,
  TeamBoxContainer,
  TeamLayout,
  TokenContainer,
  CloseButton,
  ButtonContainer,
} from './CreateTeamToken.style';
import { useTeamUpdate } from '@gdsc/provider/TeamUpdate';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';

const TeamBox = lazy(() => import('./TeamBox'));
const CreateTeamModal = lazy(() => import('./modal/CreateTeamModal'));

const CreateTeamToken = () => {
  const { data, refetch } = useGetAllTeamToken();
  const TeamData: Team[] = Array.isArray(data) ? data : [];
  const { setIsTeamUpdate } = useTeamUpdate();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleTeamClick = (team: Team) => {
    setSelectedTeam((prevSelectedTeam) =>
      prevSelectedTeam?.id === team.id ? null : team
    );
  };

  const handleCloseClick = async (parentTeamId: number) => {
    const isConfirm = confirm(`정말 팀을 삭제하시겠습니까?`);

    if (isConfirm) {
      await deleteParentTeam({ parentTeamId });
      await refetch();
    }
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen]);

  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const memberId = parseInt(draggableId.split('-')[1], 10);
    const oldTeamId = parseInt(source.droppableId.split('-')[1], 10);
    const newTeamId = parseInt(destination.droppableId.split('-')[1], 10);

    try {
      await putTeamMember({ oldTeamId, newTeamId, memberId });
      setIsTeamUpdate(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <TeamLayout>
        <TokenContainer>
          <BtnWrapper>
            {TeamData.map((item) => (
              <ButtonContainer key={item.id}>
                <CommonBtn
                  type='button'
                  size='md'
                  height='43px'
                  color='navy'
                  backgroundColor='navy'
                  hoverColor='navy'
                  onClick={() => handleTeamClick(item)}
                >
                  {item.teamName}{' '}
                </CommonBtn>

                <CloseButton onClick={() => handleCloseClick(item.id)}>
                  <img
                    src={close}
                    alt='close'
                    style={{ width: '10px', height: '10px' }}
                  />
                </CloseButton>
              </ButtonContainer>
            ))}

            <PlusBtnImg src={PlusBtn} alt='Add new team' onClick={openModal} />
          </BtnWrapper>

          {isModalOpen && <CreateTeamModal onClose={closeModal} />}

          <TeamBoxContainer>
            {selectedTeam && (
              <TeamBox
                teamId={selectedTeam.id}
                teamName={selectedTeam.teamName}
                subTeams={selectedTeam.subTeams}
              />
            )}
          </TeamBoxContainer>
        </TokenContainer>
      </TeamLayout>
    </DragDropContext>
  );
};

export default CreateTeamToken;
