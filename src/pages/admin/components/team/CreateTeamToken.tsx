import { useEffect, useState } from 'react';

import CommonBtn from '@gdsc/components/common/button/CommonBtn';

import PlusBtn from '@gdsc/assets/admin/plusBtn.svg';

import { putTeamMember } from '@gdsc/apis/hooks/admin/putTeamMember';
import { useGetAllTeamToken } from '@gdsc/apis/hooks/admin/useGetAllTeamToken';
import type { Team } from '@gdsc/apis/hooks/admin/useGetAllTeamToken';

import CreateTeamModal from '../team/modal/CreateTeamModal';
import {
  BtnWrapper,
  PlusBtnImg,
  TeamBoxContainer,
  TeamLayout,
  TokenContainer,
} from './CreateTeamToken.style';
import TeamBox from './TeamBox';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';

const CreateTeamToken = () => {
  const { data } = useGetAllTeamToken();
  const TeamData: Team[] = Array.isArray(data) ? data : [];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleTeamClick = (team: Team) => {
    setSelectedTeam((prevSelectedTeam) =>
      prevSelectedTeam?.id === team.id ? null : team
    );
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
    // 여기에 API 요청 등을 통해 서버에 변경 사항을 반영하는 로직을 추가합니다.
    console.log('드래그된 멤버 ID:', memberId);
    console.log('이동할 위치:', destination.index);
    console.log('원래 팀 ID:', source.droppableId);
    console.log('새 팀 ID:', destination.droppableId);

    try {
      // API 호출하여 서버에 변경 사항 반영
      await putTeamMember({ oldTeamId, newTeamId, memberId });
      console.log('팀 멤버 이동 완료');
    } catch (error) {
      console.error('팀 멤버 이동 실패', error);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <TeamLayout>
        <TokenContainer>
          <BtnWrapper>
            {TeamData.map((item) => (
              <CommonBtn
                key={item.id}
                type='button'
                size='md'
                height='43px'
                color='navy'
                backgroundColor='navy'
                hoverColor='navy'
                onClick={() => handleTeamClick(item)}
              >
                {item.teamName}
              </CommonBtn>
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
