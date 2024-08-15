import styled from '@emotion/styled';

export const TeamLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const TokenContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  height: 100%;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 12px;
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

export const BtnWrapper = styled.div`
  max-height: 96px;
  flex-wrap: wrap;
  gap: 10px;
  display: flex;
  align-items: center;
`;

export const PlusBtnImg = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const TeamBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: auto;
  margin-top: 20px;
`;
