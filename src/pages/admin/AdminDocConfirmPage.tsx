import { useState } from 'react';

import { useGetStatistic } from '@gdsc/apis/hooks/admin/docs/useGetStatistic';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import ApplyDetailModal from './components/docs/ApplyDetailModal';
import CurrentApplyInfo from './components/docs/CurrentApplyInfo';
import DocsSearchBar from './components/docs/DocsSearchBar';
import Stars from './components/docs/Stars';
import TableSection from './components/docs/TableSection';
import styled from '@emotion/styled';

const PassBtn = styled.button<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 0;
  border-radius: 12px;
  padding: 10px 20px;
  font-size: var(--font-size-md);
  background-color: ${({ isSelected }) =>
    isSelected ? 'var(--color-selective)' : '#ffffff26'};
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
  height: 100%;
  margin-bottom: 1rem;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

const AdminDocConfirmPage = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isMarked, setIsMarked] = useState<boolean>(false);

  const [name, setName] = useState<string>('');

  const handlePassCheck = () => {
    setIsSelected((prev) => !prev);
    setIsMarked((prev) => !prev);
  };

  const { data } = useGetStatistic();

  return (
    <DisplayLayout>
      <InfoBox>
        <ButtonBox>
          <PassBtn isSelected={isSelected} onClick={handlePassCheck}>
            <Stars color='white' />
            서류합격자 조회
          </PassBtn>
        </ButtonBox>
        <DocsSearchBar name={name} setName={setName} />
      </InfoBox>
      {data && <CurrentApplyInfo response={data} />}
      {/* <ApplyDetailModal id={1} /> */}
      <TableSection total={data?.total} isMarked={isMarked} name={name} />
    </DisplayLayout>
  );
};

export default AdminDocConfirmPage;
