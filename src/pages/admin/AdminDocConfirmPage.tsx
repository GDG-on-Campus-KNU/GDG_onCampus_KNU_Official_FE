import { useState } from 'react';

import SearchIcon from '@gdsc/assets/admin/Search.svg';

import { useGetApplyDocs } from '@gdsc/apis/hooks/admin/useGetApplyDocs';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import AdminConfirmTable from './components/docs/AdminConfirmTable';
import CurrentApplyInfo from './components/docs/CurrentApplyInfo';
import Stars from './components/docs/Stars';
import TrackSelectButtons from './components/docs/TrackSelectButtons';
import styled from '@emotion/styled';
import { Track } from '@gdsc/types/AdminInterface';

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

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 1rem;
  gap: 10px;
  margin-bottom: 10px;
  background-color: var(--color-que);
  border-radius: 12px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: white;

  :focus {
    outline: none;
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

const AdminDocConfirmPage = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isMarked, setIsMarked] = useState<boolean>(false);
  const [track, setTrack] = useState<Track | ''>('');

  const handlePassCheck = () => {
    setIsSelected((prev) => !prev);
    setIsMarked((prev) => !prev);
  };

  const { data } = useGetApplyDocs(track, isMarked, currentPage, 12);

  const allApply = data?.data.length || 0;

  return (
    <DisplayLayout>
      <Wrapper>
        <ButtonBox>
          <PassBtn isSelected={isSelected} onClick={handlePassCheck}>
            <Stars color='white' />
            서류합격자 조회
          </PassBtn>
        </ButtonBox>
        <InputBox>
          <InputWrapper>
            <label htmlFor='search'>
              <Icon src={SearchIcon} />
            </label>
            <SearchInput type='text' id='search' />
          </InputWrapper>
        </InputBox>
      </Wrapper>
      {data && <CurrentApplyInfo response={data.data} all={allApply} />}
      {data && (
        <TrackSelectButtons
          data={data}
          track={track}
          setTrack={setTrack}
          applyData={allApply}
        />
      )}
      {data && (
        <AdminConfirmTable
          data={data}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </DisplayLayout>
  );
};

export default AdminDocConfirmPage;
