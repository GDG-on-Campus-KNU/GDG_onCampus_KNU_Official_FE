import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import type { TeamList } from '@gdg/apis/hooks/team/useGetTeamList';
import HdDropDown from '@gdg/assets/HdDropDown.svg';
import HdDropUp from '@gdg/assets/HdDropUp.svg';

type DropDownProps = {
  options: TeamList[];
  onSelect: (option: TeamList) => void;
};

const DropDown = ({ options, onSelect }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TeamList | null>(
    options && options.length > 0 ? options[0] : null
  );

  const toggleDropDown = () => setIsOpen((prev) => !prev);
  const handleOptionClick = (option: TeamList) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    if (options && options.length > 0 && !selectedOption) {
      setSelectedOption(options[0]);
      onSelect(options[0]);
    }
  }, [options, selectedOption, onSelect]);

  return (
    <DropDownContainer>
      <DropDownBox onClick={toggleDropDown}>
        <DropDownText>{selectedOption?.teamName || 'Select Team'}</DropDownText>
        <img src={isOpen ? HdDropUp : HdDropDown} alt='toggle dropdown' />
      </DropDownBox>

      <DropDownList isOpen={isOpen}>
        {(options || []).map((option) => (
          <DropDownItem
            key={option.id}
            onClick={() => handleOptionClick(option)}
          >
            {option.teamName}
          </DropDownItem>
        ))}
      </DropDownList>
    </DropDownContainer>
  );
};

export default DropDown;

const DropDownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DropDownBox = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  width: calc(100% - 26px);
  height: 15px;
  padding: 14px 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const DropDownText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: var(--font-size-sm);
`;

interface DropDownListProps {
  isOpen: boolean;
}

const DropDownList = styled.ul<DropDownListProps>`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  margin-top: 8px;
  position: absolute;
  width: 100%;
  z-index: 10;
  list-style: none;
  padding: 0;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  overflow-y: auto;
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
`;

const DropDownItem = styled.li`
  padding: 12px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-halti);
  font-size: var(--font-size-sm);
  border-bottom: 1px solid var(--color-santas);
  margin: 0 auto;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:last-of-type {
    border-bottom: 0px;
  }
`;
