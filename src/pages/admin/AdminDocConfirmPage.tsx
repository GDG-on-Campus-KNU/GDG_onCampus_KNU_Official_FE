import { useState, lazy } from 'react';

import { useGetStatistic } from '@gdsc/apis/hooks/admin/docs/useGetStatistic';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import { PassBtn, ButtonBox, InfoBox } from './AdminDocConfirmPage.style';

const TableSection = lazy(() => import('./components/docs/TableSection'));
const Stars = lazy(() => import('./components/docs/Stars'));
const CurrentApplyInfo = lazy(
  () => import('./components/docs/CurrentApplyInfo')
);
const AdminSearchBar = lazy(() => import('./components/AdminSearchBar'));

const AdminDocConfirmPage = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isMarked, setIsMarked] = useState<boolean>(false);
  const [searchName, setSearchName] = useState<string>('');

  const handlePassCheck = () => {
    setIsSelected((prev) => !prev);
    setIsMarked((prev) => !prev);
  };

  const { data } = useGetStatistic();

  const handleSearchNameChange = (name: string) => {
    setSearchName(name);
  };

  return (
    <DisplayLayout>
      <InfoBox>
        <ButtonBox>
          <PassBtn isSelected={isSelected} onClick={handlePassCheck}>
            <Stars color='white' />
            서류합격자 조회
          </PassBtn>
        </ButtonBox>
        <AdminSearchBar onSearch={handleSearchNameChange} />
      </InfoBox>
      {data && <CurrentApplyInfo response={data} />}
      <TableSection total={data?.total} isMarked={isMarked} name={searchName} />
    </DisplayLayout>
  );
};

export default AdminDocConfirmPage;
