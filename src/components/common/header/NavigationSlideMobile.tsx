import NavSlideClose from '@gdsc/assets/NavSlideClose.svg';

import { useNavigationStore } from '@gdsc/store/useNavigationStore';

import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const MobileMenu = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 90%;
  height: 100%;
  border-radius: 12px 0 0 12px;
  background: linear-gradient(#392f4f, var(--color-revolver));
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%);
  ${(props) =>
    props.open &&
    css`
      animation: ${slideIn} 0.5s forwards;
    `}
`;

const StyledImg = styled.img`
  width: auto;
  height: auto;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const NavigationSlideMobile = ({ open }: { open: boolean }) => {
  const { close } = useNavigationStore();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      close();
    }
  };

  return (
    <MobileMenu open={open}>
      <div>
        <button>로그인</button>
        <button>회원가입</button>
        <CloseButton onClick={close} onKeyDown={handleKeyDown} tabIndex={0}>
          <StyledImg src={NavSlideClose} alt='close' />
        </CloseButton>
      </div>
    </MobileMenu>
  );
};

export default NavigationSlideMobile;
