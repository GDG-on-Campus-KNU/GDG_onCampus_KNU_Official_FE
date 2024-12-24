import styled from '@emotion/styled';

import { displayCenter } from '@gdg/styles/LayoutStyle';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div`
  width: 90%;
  height: 85vh;
  max-width: 1100px;
  min-height: 500px;

  ${displayCenter}
  flex-direction: column;
  align-items: center;

  background-color: var(--color-alto);

  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: 5px 5px 10px 0 rgba(25, 5, 60, 0.25);

  position: relative;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const TitleWrapper = styled.h3`
  width: 100%;

  padding: 0;
  margin: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseBtn = styled.button`
  display: flex;
  width: 18px;
  height: 18px;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CloseIconImg = styled.img`
  width: 18px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 90%;
  ${displayCenter}
  gap: 15px;
`;

export const IntroContainer = styled.div`
  width: 60%;
  height: 90%;

  overflow-y: auto;

  background-color: var(--color-white);

  padding: 15px 25px;
  margin-top: 10px;
  border-radius: 12px;
  box-shadow: 5px 5px 10px 0 rgba(25, 5, 60, 0.25);
`;

export const ProfileContainer = styled.div`
  width: 40%;
  height: 90%;

  overflow-y: auto;

  background-color: var(--color-white);

  padding: 15px 25px;
  margin-top: 10px;
  border-radius: 12px;
  box-shadow: 5px 5px 10px 0 rgba(25, 5, 60, 0.25);
`;

export const DividingLine = styled.div`
  width: 100%;
  height: 1px;

  background-color: var(--color-dove);

  margin: 15px 0px;
`;

export const SelfIntroduce = styled.div`
  width: 100%;
  height: 200px;

  overflow-y: scroll;

  color: black;
  font-size: var(--font-size-xs);
  font-weight: 200;

  margin-top: 5px;
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
