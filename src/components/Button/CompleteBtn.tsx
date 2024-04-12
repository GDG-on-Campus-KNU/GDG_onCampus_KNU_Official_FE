import styled from '@emotion/styled';

interface IButton {
  color: string;
  children: React.ReactNode;
}

const Button = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 20px;

  border: 0;
  border-radius: 12px;

  background-color: ${(props) => {
    switch (props.color) {
      case 'blue':
        return 'var(--color-blue)';
      case 'navy':
        return 'var(--color-navy)';
      case 'white':
        return 'var(--color-white)';
    }
  }};
  color: ${(props) => {
    switch (props.color) {
      case 'blue':
        return 'var(--color-white)';
      case 'navy':
        return 'var(--color-white)';
      case 'white':
        return 'var(--color-black)';
    }
  }};

  &:hover {
    background-color: ${(props) => {
      switch (props.color) {
        case 'blue':
          return 'var(--color-navy)';
        case 'navy':
          return 'var(--color-black)';
        case 'white':
          return 'var(--color-dove)';
      }
    }};
  }
`;

const CompleteBtn: React.FC<IButton> = ({ color, children }) => {
  return <Button color={color}>{children}</Button>;
};

export default CompleteBtn;
