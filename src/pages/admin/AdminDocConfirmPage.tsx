import { useState, lazy } from 'react';

import { useGetStatistic } from '@gdsc/apis/hooks/admin/docs/useGetStatistic';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import { PassBtn, ButtonBox, InfoBox } from './AdminDocConfirmPage.style';

//import TableSection from './components/docs/TableSection';

const DocsTable = lazy(
  () => import('@gdsc/pages/admin/components/docs/DocsTable')
);
const Stars = lazy(() => import('./components/docs/Stars'));
const CurrentApplyInfo = lazy(
  () => import('./components/docs/CurrentApplyInfo')
);
const AdminSearchBar = lazy(() => import('./components/AdminSearchBar'));

const AdminDocConfirmPage = () => {
  const [isMarked, setIsMarked] = useState<boolean>(false);
  const [searchName, setSearchName] = useState<string>('');

  const handlePassCheck = () => {
    setIsMarked((prev) => !prev);
  };

  const { data: applyData } = useGetStatistic();

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
      {/* <TableSection total={data?.total} isMarked={isMarked} name={searchName} /> */}
      <DocsTable searchName={searchName} />
    </DisplayLayout>
  );
};

export default AdminDocConfirmPage;
