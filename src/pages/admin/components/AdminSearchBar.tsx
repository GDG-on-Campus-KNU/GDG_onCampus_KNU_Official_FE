import SearchIcon from '@gdsc/assets/SearchIcon.svg';

import {
  SearchBarContainer,
  SearchIconImg,
  SearchInput,
} from './AdmiinSearchBar.style';

const AdminSearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchIconImg src={SearchIcon} alt='search' />
      <SearchInput placeholder='검색할 이름을 입력해주세요' />
    </SearchBarContainer>
  );
};

export default AdminSearchBar;
