import { useGetStatistic } from '@gdg/apis/hooks/admin/docs/useGetStatistic';
import { useGetTrack } from '@gdg/apis/hooks/admin/docs/useGetTrack';
import { DisplayLayout } from '@gdg/styles/LayoutStyle';
import { useState, lazy } from 'react';

import { PassBtn, ButtonBox, InfoBox } from './AdminDocConfirmPage.style';

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
  const [isMarked, setIsMarked] = useState<boolean>(false);
  const [searchName, setSearchName] = useState<string>('');
  const [trackIdx, setTrackIdx] = useState<number>(0);

  const handlePassCheck = () => {
    setIsMarked((prev) => !prev);
  };

  const { data: applyData } = useGetStatistic();
  const { data: trackData } = useGetTrack();

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
      />
    </DisplayLayout>
  );
};

export default AdminDocConfirmPage;
