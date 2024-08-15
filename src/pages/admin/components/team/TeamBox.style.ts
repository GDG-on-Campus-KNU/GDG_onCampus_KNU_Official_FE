import styled from '@emotion/styled';

export const TeamBoxContainer = styled.div`
  display: flex;
  width: 100%;
  height: 420px;
  overflow-x: auto;
  gap: 30px;
  white-space: nowrap;

  ::-webkit-scrollbar {
    height: 6px;
    display: block;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-abony);
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: #a3a3a3;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }
`;

export const ParentTeamBox = styled.div`
  width: 195px;
  height: 360px;
  padding: 20px;
  background-color: var(--color-que);
  border-radius: 12px;
  flex-shrink: 0;
`;

export const MemberTable = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 6px;
    display: block;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }
`;

export const MemberBox = styled.div`
  width: calc(100% - 36px);
  height: 40px;
  background-color: var(--color-more-transparent);
  border-radius: 12px;
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  cursor: grab;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const PlusBox = styled.div`
  width: 235px;
  height: 400px;
  border-radius: 12px;
  border: 2px dashed var(--color-transparent);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
