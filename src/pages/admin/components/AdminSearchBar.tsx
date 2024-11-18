import SearchIcon from '@gdg/assets/SearchIcon.svg';
import { useState, useRef, useEffect, forwardRef } from 'react';

import {
  SearchBarContainer,
  SearchIconImg,
  SearchInput,
} from './AdminSearchBar.style';

const InputField = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <SearchInput
      ref={ref}
      type='text'
      placeholder='검색할 이름을 입력하세요'
      {...props}
    />
  );
});

InputField.displayName = 'InputField';

const AdminSearchBar = ({ onSearch }: { onSearch: (name: string) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [clickTrigger, setClickTrigger] = useState<boolean>(false);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      onSearch(inputRef.current.value);
    }
    setClickTrigger((prev) => !prev);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleClick();
  };

  useEffect(() => {}, [clickTrigger]);

  return (
    <SearchBarContainer onSubmit={handleSubmit}>
      <SearchIconImg src={SearchIcon} alt='search' />
      <InputField ref={inputRef} />
    </SearchBarContainer>
  );
};

export default AdminSearchBar;
