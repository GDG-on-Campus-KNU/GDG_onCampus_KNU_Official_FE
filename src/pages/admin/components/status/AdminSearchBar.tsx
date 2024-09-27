import {
  SearchBarContainer,
  SearchIconImg,
  SearchInput,
} from './AdminSearchBar.style';
import SearchIcon from '@gdg/assets/SearchIcon.svg';

const AdminSearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchIconImg src={SearchIcon} alt='search' />
      <SearchInput placeholder='검색할 이름을 입력해주세요' />
    </SearchBarContainer>
  );
};

export default AdminSearchBar;
