import { useState, lazy } from 'react';

import { useGetStatistic } from '@gdg/apis/hooks/admin/docs/useGetStatistic';
import { useGetTrack } from '@gdg/apis/hooks/admin/docs/useGetTrack';
import { DisplayLayout } from '@gdg/styles/LayoutStyle';

const TrackSelectBar = lazy(
  () => import('@gdg/components/common/select/trackSelectBar')
);
import { PassBtn, ButtonBox, InfoBox } from './AdminDocConfirmPage.style';

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

  const tracks = [
    'TOTAL',
    'FRONT_END',
    'BACK_END',
    'ANDROID',
    'AI',
    'DESIGNER',
  ];
  const tracksKorean = [
    '전체',
    '프론트엔드',
    '백엔드',
    '안드로이드',
    'AI',
    '디자이너',
  ];

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
        <TrackSelectBar
          tracks={tracks}
          tracksKorean={tracksKorean}
          trackData={trackData}
          onSelect={handleTrackSelect}
        />
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
