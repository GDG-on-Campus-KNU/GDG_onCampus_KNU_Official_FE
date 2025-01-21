import { useState, useEffect, lazy } from 'react';

import { useGetStatistic } from '@gdg/apis/hooks/admin/docs/useGetStatistic';
import { useGetTrack } from '@gdg/apis/hooks/admin/docs/useGetTrack';
import { useGetClassYearList } from '@gdg/apis/hooks/yearId/useGetClassYearList';
import { DisplayLayout } from '@gdg/styles/LayoutStyle';

import ClassYearIdDropDown from './components/docs/ClassYearIdDropDown';
import {
  PassBtn,
  ButtonContainer,
  ButtonBox,
  InfoBox,
} from './AdminDocConfirmPage.style';
const TrackSelectBar = lazy(() => import('./components/docs/TrackSelectBar'));

const DocsTable = lazy(
  () => import('@gdg/pages/admin/components/docs/DocsTable')
);
const Stars = lazy(() => import('./components/docs/Stars'));
const CurrentApplyInfo = lazy(
  () => import('./components/docs/CurrentApplyInfo')
);
const AdminSearchBar = lazy(() => import('./components/AdminSearchBar'));

const AdminDocConfirmPage = () => {
  const { data: yearIdList } = useGetClassYearList();

  const [isMarked, setIsMarked] = useState<boolean>(false);
  const [searchName, setSearchName] = useState<string>('');
  const [trackIdx, setTrackIdx] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [classYearId, setClassYearId] = useState<number>(1);
  const [classYearname, setClassYearName] = useState<string>('1기');

  const { data: applyData, refetch: refetchApplyData } =
    useGetStatistic(classYearId);
  const { data: trackData, refetch: refetchTrackData } =
    useGetTrack(classYearId);

  useEffect(() => {
    if (yearIdList && yearIdList.length > 0) {
      const lastYear = yearIdList[yearIdList.length - 1];
      setClassYearId(lastYear.id);
      setClassYearName(lastYear.name);
    }
  }, [yearIdList]);

  useEffect(() => {
    refetchApplyData();
    refetchTrackData();
  }, [classYearId, refetchApplyData, refetchTrackData]);

  const handlePassCheck = () => {
    setIsMarked((prev) => !prev);
  };

  const handleClassYearIdCheck = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleYearIdClick = (id: number, name: string) => {
    setClassYearId(id);
    setClassYearName(name);
    setIsDropdownOpen(false);
  };

  const handleTrackSelect = (index: number) => {
    setTrackIdx(index);
  };

  const handleSearchNameChange = (name: string) => {
    setSearchName(name);
  };

  return (
    <DisplayLayout>
      <InfoBox>
        <ButtonBox>
          <PassBtn isSelected={isMarked} onClick={handlePassCheck}>
            <Stars color='white' />
            서류합격자 조회
          </PassBtn>
          <ButtonContainer>
            <PassBtn
              isSelected={isDropdownOpen}
              onClick={handleClassYearIdCheck}
            >
              {`${classYearname} ${'\u00A0'} ▾`}
            </PassBtn>
            {isDropdownOpen && (
              <ClassYearIdDropDown
                yearIdList={yearIdList}
                onYearIdClick={handleYearIdClick}
              />
            )}
          </ButtonContainer>
        </ButtonBox>
        <AdminSearchBar onSearch={handleSearchNameChange} />
      </InfoBox>
      {applyData && <CurrentApplyInfo response={applyData} />}
      {trackData && (
        <TrackSelectBar trackData={trackData} onSelect={handleTrackSelect} />
      )}

      <DocsTable
        searchName={searchName}
        trackIdx={trackIdx}
        isMarked={isMarked}
        classYearId={classYearId}
      />
    </DisplayLayout>
  );
};

export default AdminDocConfirmPage;
