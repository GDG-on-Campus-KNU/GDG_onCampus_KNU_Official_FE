import { useState, useEffect } from 'react';

import {
  SearchBarContainer,
  SearchIconImg,
  SearchInput,
} from './AdminSearchBar.style';
import SearchIcon from '@gdg/assets/SearchIcon.svg';
import { useDebounce } from '@gdg/hooks/useDebounce';

const AdminSearchBar = ({ onSearch }: { onSearch: (name: string) => void }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedInputValue = useDebounce(inputValue, 400);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    onSearch(debouncedInputValue);
  }, [debouncedInputValue, onSearch]);

  return (
    <SearchBarContainer>
      <SearchIconImg src={SearchIcon} alt='search' />
      <SearchInput
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder='검색할 이름을 입력하세요.'
      />
    </SearchBarContainer>
  );
};

export default AdminSearchBar;
