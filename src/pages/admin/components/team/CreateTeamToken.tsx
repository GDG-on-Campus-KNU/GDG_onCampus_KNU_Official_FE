import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { useEffect, useState, lazy } from 'react';

import { deleteParentTeam } from '@gdg/apis/hooks/admin/team/deleteParentTeam';
import { putTeamMember } from '@gdg/apis/hooks/admin/team/putTeamMember';
import { useGetAllTeamToken } from '@gdg/apis/hooks/admin/team/useGetAllTeamToken';
import type { Team } from '@gdg/apis/hooks/admin/team/useGetAllTeamToken';
import PlusBtn from '@gdg/assets/admin/PlusBtn.svg';
import close from '@gdg/assets/admin/remove.svg';
import { useTeamUpdate } from '@gdg/provider/TeamUpdate';

import {
  BtnWrapper,
  PlusBtnImg,
  TeamBoxContainer,
  TeamLayout,
  TokenContainer,
  CloseButton,
  ButtonContainer,
} from './CreateTeamToken.style';

const TeamBox = lazy(() => import('./TeamBox'));
const CreateTeamModal = lazy(() => import('./modal/CreateTeamModal'));
const CommonBtn = lazy(() => import('@gdg/components/common/button/CommonBtn'));

const CreateTeamToken = () => {
  const { data } = useGetAllTeamToken();
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
      window.location.reload();
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
      // console.error(error);
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
