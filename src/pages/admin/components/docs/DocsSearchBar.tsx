import SearchIcon from '@gdsc/assets/admin/Search.svg';

import styled from '@emotion/styled';

type Props = {
  name: string;
  setName: (name: string) => void;
};

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

const DocsSearchBar = ({ name, setName }: Props) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <>
      <InputBox>
        <InputWrapper>
          <label htmlFor='search'>
            <Icon src={SearchIcon} />
          </label>
          <SearchInput
            type='text'
            id='search'
            placeholder='검색할 이름을 입력해주세요'
            onChange={handleSearch}
            value={name}
          />
        </InputWrapper>
      </InputBox>
    </>
  );
};
export default DocsSearchBar;
