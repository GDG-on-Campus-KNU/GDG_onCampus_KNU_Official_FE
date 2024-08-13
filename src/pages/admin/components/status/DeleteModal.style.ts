import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  width: 644px;
  height: 360px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

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
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;
`;
