import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div`
  width: 360px;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: var(--color-white);

  border-radius: 12px;
`;

export const ButtonContainer = styled.div`
  width: 520px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 15px;

  margin-top: 25px;
`;
