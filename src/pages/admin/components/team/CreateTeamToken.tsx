import { useEffect, useState } from 'react';

import CommonBtn from '@gdsc/components/common/button/CommonBtn';

import PlusBtn from '@gdsc/assets/admin/plusBtn.svg';

import { useGetAllTeamToken } from '@gdsc/apis/hooks/admin/useGetAllTeamToken';
import type { Team } from '@gdsc/apis/hooks/admin/useGetAllTeamToken';

import CreateTeamModal from '../team/modal/CreateTeamModal';
import TeamBox from './TeamBox';
import styled from '@emotion/styled';

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

  return (
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
            />
          )}
        </TeamBoxContainer>
      </TokenContainer>
    </TeamLayout>
  );
};

export default CreateTeamToken;

const TeamLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TokenContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  height: 100%;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 12px;
    display: block;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }
`;

const BtnWrapper = styled.div`
  max-height: 96px;
  flex-wrap: wrap;
  gap: 10px;
  display: flex;
  align-items: center;
`;

const PlusBtnImg = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const TeamBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: auto;
  margin-top: 20px;
`;
